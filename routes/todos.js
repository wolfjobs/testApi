'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var moment = require('moment');

var Todo = AV.Object.extend('Todo');

// 查询 Todo 列表
router.get('/list', function (req, res, next) {
  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function (results) {

    // 接口数据的返回
    res.writeHead(200, {'Content-Type': 'application/json'});
    const res_res=[]
    for(let i=0;i<results.length;i++){
      let item = results[i];
      item.createdAt =  moment(item.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      item.updatedAt =  moment(item.get('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      if(item.get('content').trim()) {
        res_res.push(item)
      }
    }
    res.end(JSON.stringify(res_res));

  }, function (err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('todos', {
        title: 'TODO 列表',
        todos: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/', function (req, res, next) {
  var query = new AV.Query(Todo);
  // query.descending('createdAt');  // 根据【createdAt】排序
  query.ascending('createdAt');  // 根据【createdAt】倒序排序
  query.find().then(function (results) {
    const res_res=[]
    for(let i=0;i<results.length;i++){
      let item = results[i];
      item.createdAt =  moment(item.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      item.updatedAt =  moment(item.get('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      if(item.get('content').trim()) {
        res_res.push(item)
      }
    }
    // 列表渲染
    res.render('todos', {
      title: 'TODO 列表',
      todos: res_res
    });
  }, function (err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('todos', {
        title: 'TODO 列表',
        todos: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

// 新增 Todo 项目
router.post('/', function (req, res, next) {
  var content = req.body.content;
  var todo = new Todo();
  todo.set('content', content);
  todo.save().then(function (todo) {
    res.redirect('/todos');
  }).catch(next);
});

module.exports = router;
