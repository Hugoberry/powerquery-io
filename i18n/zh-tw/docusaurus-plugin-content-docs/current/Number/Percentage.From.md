---
title: Percentage.From
---

# Percentage.From


## Description

傳回指定值的百分比值。


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

從指定的 <code>value</code> 傳回 <code>percentage</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Percentage.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是具有尾端百分比符號的 <code>text</code>，則會傳回已轉換的十進位數字。否則會使用 <code>Number.FromText</code> 將該值轉換成 <code>number</code>。也可能會提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得 &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; 的&lt;code&gt;百分比&lt;/code&gt;值。
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
