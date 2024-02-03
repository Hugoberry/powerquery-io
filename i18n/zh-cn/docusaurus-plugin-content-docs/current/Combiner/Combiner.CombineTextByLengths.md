---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

返回一个函数，它使用指定的长度将文本列表合并。


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

返回一个函数，它使用指定的长度将文本值列表合并成单个文本值。


## Examples

### Example #1 
通过从每个输入值中提取指定数量的字符，合并文本值列表。
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
在第一次使用模板文本预填充结果后，通过提取指定数量的字符来合并文本值列表。
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
