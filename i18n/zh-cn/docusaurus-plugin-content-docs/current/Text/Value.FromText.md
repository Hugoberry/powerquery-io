---
title: Value.FromText
---

# Value.FromText


## Description

从文本表示形式创建强类型的值。


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

从文本表示形式 <code>text</code> 对值解码，并将其解释为具有适当类型的值。    <code>Value.FromText</code> 采用一个文本值并返回数值、逻辑值、Null 值、日期时间值、期间值或文本值。空文本值会被解释为 Null 值。    还可提供可选的 <code>culture</code> (例如 "en-US")。



## Category
Text.Conversions from and to text
