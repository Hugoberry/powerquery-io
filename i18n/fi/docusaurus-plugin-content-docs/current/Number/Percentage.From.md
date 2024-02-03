---
title: Percentage.From
---

# Percentage.From


## Description

Palauttaa prosenttiarvon annetusta arvosta.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Palauttaa <code>percentage</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>, <code>Percentage.From</code> palauttaa tuloksen <code>null</code>. Jos annettu <code>value</code> on <code>text</code>-tyyppinen merkkijono, jossa on lopussa prosenttimerkki, palautetaan muunnettu desimaaliluku. Käytä muussa tapauksessa kohdetta <code>Number.From</code> sen muuntamiseen <code>number</code>-tyyppiseksi arvoksi. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki kohteen &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; &lt;code&gt;percentage&lt;/code&gt;-arvo.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
