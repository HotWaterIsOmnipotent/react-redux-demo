import Post from './Post'
import Get from './Get'
import {Component} from 'react'
Component.prototype.$post = Post
Component.prototype.$get = Get

export {
    Post,
    Get
}