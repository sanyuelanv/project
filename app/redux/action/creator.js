import * as types from './types'

export let titleAction = (title = '标题')=>{
  return {
    type:types.TITLE,
    title
  }
}
export let authorAction = (author = '作者')=>{
  return {
    type:types.AUTHOR,
    author
  }
}
export let contentAction = (content = '')=>{
  return {
    type:types.CONTENT,
    content
  }
}
