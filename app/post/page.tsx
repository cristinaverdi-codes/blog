import * as fs from 'fs'
import React from 'react'
import MarkdownIt from 'markdown-it'
import parse, { DOMNode, domToReact, HTMLReactParserOptions, Element } from 'html-react-parser'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


var md = new MarkdownIt()
var post = fs.readFileSync(
  'content/demo-post.md')

console.log(post.toLocaleString())
var html = md.render(post.toLocaleString());
var jsx = parse(html)

const html2 = `
  <p id="main">
    <span class="prettify">
      keep me and make me pretty!
    </span>
  </p>
`;

let options1 = {
  replace: domNode => {
    if(!(domNode instanceof Element)) return

    if (domNode.attribs.id === 'main') {
      return (
        <h1 style={{fontSize: '3rem'}}>{domToReact(domNode.children, options1)}</h1>
      )
    }

    if (domNode.attribs.class === 'prettify') {
      return (
        <span style={{color: "red"}}>{domToReact(domNode.children, options1)}</span>
      )
    }
  }
}
const parser = (input: string) =>
  parse(input, options1);

const markdown = `Just a link: https://reactjs.com.`

export default function Page(): React.JSX.Element {
  return (
    <>
      <h1>Hello, World!</h1>
      {jsx}
      {parser(html2)}
      <ReactMarkdown
        children={post.toString()}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </>
  )
}