---
title: Binary.From
---

# Binary.From


## Description

根據指定的值建立二進位


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

從指定的 <code>value</code> 傳回 <code>binary</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Binary.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>binary</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>binary</code> 值:      <ul>        <li><code>text</code>: 以文字表示的 <code>binary</code> 值。如需詳細資料，請參閱 <code>Binary.FromText</code>。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
取得 &lt;code&gt;&#34;1011&#34;&lt;/code&gt; 的 &lt;code&gt;binary&lt;/code&gt; 值。
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
