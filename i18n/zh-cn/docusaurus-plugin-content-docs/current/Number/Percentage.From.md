---
title: Percentage.From
---

# Percentage.From


## Description

返回给定值的百分比值。


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

从给定的 <code>value</code> 返回 <code>percentage</code> 值。如果给定的 <code>value</code> 为 <code>null</code>，则 <code>Percentage.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是带有尾随百分比符号的 <code>text</code>，则返回转换的小数。否则，请使用 <code>Number.From</code> 将该值转换为 <code>number</code>。还可提供可选的 <code>culture</code> (例如 “en-US”)。


## Examples

### Example #1 
获取 &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; 的&lt;code&gt;百分比&lt;/code&gt;值。
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
