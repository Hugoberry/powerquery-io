---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

推斷在文字中編碼之數字的細微數字類型 (Int64.Type、Double.Type 等)。


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

推斷 <code>text</code> 的細微數字類型 (Int64.Type、Double.Type 等)。如果 <code>text</code> 不是數字，就會引發錯誤。也可提供選用的 <code>culture</code> (例如 "en-US")。



## Category
Text
