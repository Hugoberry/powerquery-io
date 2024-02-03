---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

返回一个函数，它根据从一种类型的字符到另一种类型字符的转换将文本拆分为一列文本。\{0} 和 \{1} 参数可以是一列字符，也可以是采用一个字符并返回 true/false 的一个函数。


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

返回一个函数，它根据从一种类型的字符到另一种类型字符的转换将文本拆分为一列文本。<code>before</code> 和 <code>after</code> 参数可以是一列字符，也可以是采用一个字符并返回 true/false 的一个函数。


## Examples

### Example #1 
每当大写或小写字母后跟数字时，拆分输入。
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
