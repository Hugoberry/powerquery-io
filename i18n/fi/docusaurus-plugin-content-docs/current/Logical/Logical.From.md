---
title: Logical.From
---

# Logical.From


## Description

Luo loogisen arvon annetusta arvosta.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Palauttaa <code>logical</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>, <code>Logical.From</code> palauttaa kohteen <code>null</code>.  Jos annettu <code>value</code> on <code>logical</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>logical</code>-arvoksi:      <ul>        <li><code>text</code>: <code>logical</code>-arvo tekstimerkkijonosta, joko <code>"true"</code> tai <code>"false"</code>. Jos haluat lisätietoja, katso <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code>, jos <code>value</code> on <code>0</code>, ja <code>true</code> muussa tapauksessa.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Muunna &lt;code&gt;2&lt;/code&gt; &lt;code&gt;logical&lt;/code&gt;-arvoksi.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
