# css学习笔记

## 常用属性
- -webkit-user-select: "none"/"text", 禁止/允许选择。如在做splitter条的时候，只希望拖拽splitter改变窗口大小，不希望选中文件，就可设置为none。

- 设置以col-开头的class的样式:

   ```
   [class^=col-]{
               background: #00b3ee;
               border-right: 1px solid #f0ad4e;
           }
   ```