---
title: Double.From
---

# Double.From


## Description

Luo Double-kohteen annetusta arvosta.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Palauttaa Double-tyyppisen <code>number</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>-tyhjäarvo, <code>Double.From</code> palauttaa arvon <code>null</code>. Jos annettu <code>value</code> on <code>number</code>, joka on Double-alueella, palautetaan <code>value</code>, ja muussa tapauksessa palautetaan virhe. Jos annettu <code>value</code> on mitä tahansa muuta tyyppiä, käytä <code>Number.FromText</code> sen muuntamiseen <code>number</code>-arvoksi.Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki kohteen &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; Double-tyyppinen &lt;code&gt;number&lt;/code&gt;-arvo.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
