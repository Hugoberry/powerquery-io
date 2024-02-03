---
title: Single.From
---

# Single.From


## Description

Luo Single-kohteen annetusta arvosta.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Palauttaa Single-tyyppisen <code>number</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>-tyhjäarvo, <code>Double.From</code> palauttaa arvon <code>null</code>. Jos annettu <code>value</code> on <code>number</code>, joka on Single-alueella, palautetaan <code>value</code>, ja muussa tapauksessa palautetaan virhe. Jos annettu <code>value</code> on mitä tahansa muuta tyyppiä, käytä <code>Number.FromText</code> sen muuntamiseen <code>number</code>-arvoksi.Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki kohteen &lt;code&gt;&#34;1.5&#34;&lt;/code&gt; Single-tyyppinen &lt;code&gt;number&lt;/code&gt;-arvo.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
