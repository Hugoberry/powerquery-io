---
title: Currency.From
---

# Currency.From


## Description

从给定值中返回一个货币值。


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

从给定的 <code>value</code> 返回 <code>currency</code> 值。如果给定的 <code>value</code> 为 <code>null</code>，则 <code>Currency.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是货币范围内的 <code>number</code>，则将 <code>value</code> 的小数部分舍入为 4 位小数位数后返回。如果 <code>value</code> 属于任何其他类型，则首先使用 <code>Number.FromText</code> 将其转换为 <code>number</code>。货币的有效范围为 <code>-922,337,203,685,477.5808</code> 到 <code>922,337,203,685,477.5807</code>。要了解可用的舍入模式，请参阅 <code>Number.Round</code>。默认为 <code>RoundingMode.ToEven</code>。还可能提供可选的 <code>culture</code> (例如 “en-US”)。


## Examples

### Example #1 
获取 &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; 的 &lt;code&gt;currency&lt;/code&gt; 值。
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
使用 &lt;code&gt;RoundingMode.Down&lt;/code&gt; 获取 &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; 的 &lt;code&gt;currency&lt;/code&gt; 值。
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
