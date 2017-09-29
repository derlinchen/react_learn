'use strict';

import 'semantic-ui/semantic.min.css!';

import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comments/CommentBox';

var comments = [
	{"author":"王浩","date":"5分钟前","text":"天气不错"},
	{"author":"小雪","date":"3分钟前","text":"出去玩啦"}
]

ReactDOM.render(
	<CommentBox url="app/comments.json" />,
	document.getElementById('app')
)
