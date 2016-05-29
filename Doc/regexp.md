# 正则表达式

- 测试网站:
  - https://jex.im/regulex/ (javascript用)
  - http://rubular.com/r/xfQHocREGj (Ruby)
  - http://www.pyregex.com/ (Python)

- 教程网站:
  - http://www.jb51.net/tools/zhengze.html

## 常用元字符
- []: 选择里面的任一个字符
- [^]: 不是选择择里面的任一字符
- . ： 任一字符(除换行符)
- a-b: a到b间的任一字符
- {x,n}: 前一字符至少重复x次，至多重复n次
- {x}: 前一字符重复x次
- {x,}: 至少重复x次。
- ？: {0,1}
- +: {1,}
- *: {0,}
- ^xxx: 字符串以xxx开头
- aaa$: 字符串以aaa结尾
- a|b, a或b
- \d: 数字(大写反义)
- \b: 一个词的边界位置，如查找‘hi', 但不查找'hia', 'ahi', 就可以用\bhi\b。(大写反义)
- \s: 空格、制表符、换行符、全角空格等(大写反义)
- \w: 字母、数字、下划线、中文等(大写反义)
- `[\u4E00-\u9FA5\uF900-\uFA2D]`: 中文字符。
- `[\uFF00-\uFFEF]`: 全角符号。
- (): 分组, 如重复xy两次,(xy){2}。
- (?=exp): \b\w+(?=ing\b): 查找I'm singing while you're dancing.时，它会匹配sing和danc。
- (?<=exp):

## 其它
- 如果允许字符串多行,^和$表示匹配行的开始和结尾处

## 例子:
- 5-12位数字: ^\d{5,12}$

