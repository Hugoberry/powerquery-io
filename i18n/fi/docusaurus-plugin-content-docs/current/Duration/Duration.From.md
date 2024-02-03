---
title: Duration.From
---

# Duration.From


## Description

Luo keston annetusta arvosta.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Palauttaa <code>duration</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>, <code>Duration.From</code> palauttaa kohteen <code>null</code>.  Jos annettu <code>value</code> on <code>duration</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>duration</code>-arvoksi:      <ul>        <li><code>text</code>: <code>duration</code>-arvo tekstimuotoisista kuluneen ajan muodoista (d.h:m:s). Jos haluat lisätietoja, katso <code>Duration.FromText</code>.</li>        <li><code>number</code>: <code>duration</code>, joka vastaa kohteen <code>value</code> ilmaisemia kokonaisia päiviä ja päivien osia.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Muunna &lt;code&gt;2.525&lt;/code&gt; &lt;code&gt;duration&lt;/code&gt;-arvoksi.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
