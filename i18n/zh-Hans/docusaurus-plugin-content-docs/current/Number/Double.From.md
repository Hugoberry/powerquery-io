---
title: Double.From
---

# Double.From


从给定的值创建 Double。


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 <code>value</code> 返回双精度 <code>number</code> 值。如果给定的 <code>value</code> 为 <code>null</code>，则 <code>Double.From</code> 将返回 <code> null</code>。如果给定的 <code>value</code> 为双精度范围内的 <code>number</code>，则返回 <code>value</code>，否则返回错误。如果 <code>value</code> 属于任何其他类型，则将首先使用 <code>Number.FromText</code> 将其转换为 <code>number</code>。还可以提供可选的 <code>culture</code> (例如，“en-US”)。


## Examples

### Example #1 
获取 &lt;code&gt;&#34;4&#34;&lt;/code&gt; 的 Double &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
