---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

推断文本中已编码数字的粒度数字类型(Int64.Type、Double.Type 等)。


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

推断 <code>text</code> 的粒度值类型(Int64.Type、Double.Type 等)。如果 <code>text</code> 不是数值，则会引发错误。还可提供可选的 <code>culture</code>(例如“en-US”)。



## Category
Text
