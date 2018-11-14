import path from 'path'
import fs from 'fs'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { getLoadableState } from 'loadable-components/server'
import Helmet from 'react-helmet'

import createServerStore from './store'
import createRoutes from '../src/routes'

import Root, { sheetsRegistry } from '../src/containers/Root'

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body, loadableState }) => {
  data = data.replace('<html lang="en">', `<html ${html} lang="es">`)
  data = data.replace('</head>', `${head}</head>`)
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  data = data.replace('<script', loadableState + '<script')

  return data
}

export function createStore(req, res, next) {
  if(req.url.indexOf('.') !== -1 || req.url.indexOf('api') !== -1) {
    next()
  } else {
    const filePath = path.resolve(__dirname, '../build/index.html')

    // Load in our HTML file from our build
    fs.readFile(filePath, 'utf8', async (err, htmlData) => {
      // If there's an error... serve up something nasty
      if(err) {
        console.error('Read error', err)

        return res.status(404).end()
      }

      // Create a store and sense of history based on the current path
      const { store, history } = createServerStore(req.path)

      // Set data into locals to passa another middleware
      res.locals = {
        store,
        history,
        htmlData
      }
      next()
    })
  }
}

// const universalLoader = (req, res) => {
export const universalLoader = async (req, res) => {
  // Create a store and sense of history based on the current path
  const { store, history, htmlData } = res.locals // createServerStore(req.path)

  const routes = createRoutes(history, req.protocol + '://' + req.headers.host, store)
  // Render App in React
  const app = <Root store={store}>{routes}</Root>
  const loadableState = await getLoadableState(app)
  const routeMarkup = renderToString(app)
  const materialStyle = `<style id="jss-server-side">${sheetsRegistry.toString()}</style>`

  // Let Helmet know to insert the right tags
  const helmet = Helmet.renderStatic()

  // Form the final HTML response
  const html = prepHTML(htmlData, {
    html         : helmet.htmlAttributes.toString(),
    head         : helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(),
    body         : materialStyle + routeMarkup,
    loadableState: loadableState.getScriptTag()
  })

  // Up, up, and away...
  res.send(html)
}
