---
title: Binary.From
---

# Binary.From


## Description

Luo binaarin annetusta arvosta


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Palauttaa <code>binary</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>, <code>Binary.From</code> palauttaa kohteen <code>null</code>.  Jos annettu <code>value</code> on <code>binary</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>binary</code>-arvoksi:      <ul>        <li><code>text</code>: <code>binary</code>-arvo tekstiesityksestä. Jos haluat lisätietoja, katso <code>Binary.FromText</code>.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Hae kohteen &lt;code&gt;&#34;1011&#34;&lt;/code&gt; &lt;code&gt;binary&lt;/code&gt;-arvo.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
