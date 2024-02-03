---
title: Text.From
---

# Text.From


## Description

从给定的值创建文本值。


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

返回 <code>value</code> 的文本表示形式。<code>value</code> 可以是 <code>number</code>、<code>date</code>、<code>time</code>、<code>datetime</code>、<code>datetimezone</code>、<code>logical</code>、<code>duration</code> 或 <code>binary</code> 值。    如果给定值为 Null，<code>Text.From</code> 将返回 Null。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
从数字 3 创建一个文本值。
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
