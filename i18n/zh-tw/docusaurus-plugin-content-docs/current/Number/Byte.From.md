---
title: Byte.From
---

# Byte.From


## Description

從指定的值建立 8 位元整數。


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

從指定的 <code>value</code> 傳回 8 位元整數 <code>number</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Byte.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是位於 8 位元整數範圍內且無任何小數點位數部分的 <code>number</code>，則會傳回 <code>value</code>。若有小數點位數部分，則會使用指定的四捨五入模式模式將該數字四捨五入。預設的四捨五入模式為 <code>RoundingMode.ToEven</code>。若指定的 <code>value</code> 是任何其他類型，則會先使用 <code>Number.FromText</code> 將其轉換成 <code>number</code>。如需可用的四捨五入模式，請參閱 <code>Number.Round</code>。也可能會提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得 &lt;code&gt;&#34;4&#34;&lt;/code&gt; 的 8 位元整數 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
使用 &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; 取得 &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; 的 8 位元整數 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
