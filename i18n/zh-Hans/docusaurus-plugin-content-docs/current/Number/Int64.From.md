---
title: Int64.From
---

# Int64.From


## Description

根据给定值创建 64 位整数。


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

从给定的 <code>value</code> 中返回 64 位整数 <code>number</code> 值。如果给定的 <code>value</code> 为 <code>null</code>，则 <code>Int64.From</code> 返回 <code>null</code>。如果给定的 <code>value</code> 是不带小数部分的 64 位整数范围内的 <code>number</code>，则返回 <code>value</code>。如果带有小数部分，则按指定舍入模式舍入该数字。默认舍入模式为 <code>RoundingMode.ToEven</code>。如果 <code>value</code> 属于任何类型，则首先使用 <code>Number.FromText</code> 将其转换为 <code>number</code>。要了解可用的舍入模式，请参阅 <code>Number.Round</code>。还可能提供可选的 <code>culture</code> (例如，“en-US”)。


## Examples

### Example #1 
获取 64 位整数的&lt;code&gt;number&lt;/code&gt; 值 &lt;code&gt;&#34;4&#34;&lt;/code&gt;。
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
使用 &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; 获取 &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; 的 64 位整数 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
