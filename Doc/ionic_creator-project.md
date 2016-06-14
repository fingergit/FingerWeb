[TOC]

# ionic creator工程文件分析
当在Web界面对App进行操作时（如添加页面，修改控件等），ionic creator会将修改后的数据及时传递到服务器端。

- 使用的接口: `https://creator.ionic.io/api/v1/creator/dde58b88a82d`，其中dde58b88a82d为appId。
- 与接口通讯使用的插件: angular $resource模块。关于它的使用参见http://blog.csdn.net/yangnianbing110/article/details/43163155
- 每次通讯，都会传递一个完整的项目json数据。ionic_creator-project文件夹下为请求和响应的数据。
  - ioniccreator_Request.txt: 请求的所有数据。
  - ioniccreator_Response.txt：响应的所有数据。
  - ioniccreatorproj-Request.json：请求中的json数据。
  - ioniccreatorproj-Response.json：响应中的json数据。通过比较，发现两者除了时间不同，其它部分是相同的。
  - ioniccreatorproj-document.json：响应中json数据中的document节点json数据。
  - ioniccreatorproj-html.json： 响应中json数据中的html节点json数据。
  - ioniccreatorproj-html-singlehtml.html：ioniccreatorproj-html.json中的singlehtml数据。是将js数据、模板、html等数据全部合在一个文件中。

## 其它
- 发射消息: `$rootScope.$emit("document.doneSaving")`
- 响应消息:
  ```
  $rootScope.$on("document.doneSaving", function(t, n) {
                    $rootScope.saveStatus = "All changes saved",
                    $rootScope.saveCode = "saved"
           })
  ```
- $emit只能向parent controller传递event与data
- $broadcast只能向child controller传递event与data
- $on用于接收event与data

参考: http://www.tuicool.com/articles/qIBNve
