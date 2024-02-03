---
title: Decimal.From
---

# Decimal.From


## Description

根據指定的值建立 Decimal。


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

從指定的 <code>value</code> 傳回 Decimal <code>number</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Decimal.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是位於 Decimal 範圍內的 <code>number</code>，則會傳回 <code>value</code>，否則會傳回錯誤。若指定的 <code>value</code> 是任何其他類型，則會先使用 <code>Number.FromText</code> 將其轉換成 <code>number</code>。也可能會提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得 &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; 的 Decimal &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
