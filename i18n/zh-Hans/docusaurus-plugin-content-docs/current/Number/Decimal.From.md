---
title: Decimal.From
---

# Decimal.From


从给定的值创建 Decimal。


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 <code>value</code> 中返回十进制 <code>number</code> 值。如果给定的 <code>value</code> 为 <code>null</code>，则 <code>Decimal.From</code> 返回 <code> null</code>。如果给定的 <code>value</code> 是在十进制范围内的 <code>number</code>，则返回 <code>value</code>，否则返回错误。如果 <code>value</code> 属于任何其他类型，则将首先使用 <code>Number.FromText</code> 将其转换为<code>number</code>。还可以提供可选的 <code>culture</code> (例如，“en-US”)。


## Examples

### Example #1 
获取 &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; 的十进制 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
