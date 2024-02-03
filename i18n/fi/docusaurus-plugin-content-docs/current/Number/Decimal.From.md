---
title: Decimal.From
---

# Decimal.From


## Description

Luo Decimal-kohteen annetusta arvosta.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Palauttaa Decimal-tyyppisen <code>number</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>-tyhjäarvo, <code>Double.From</code> palauttaa arvon <code>null</code>. Jos annettu <code>value</code> on <code>number</code>, joka on Decimal-alueella, palautetaan <code>value</code>, ja muussa tapauksessa palautetaan virhe. Jos annettu <code>value</code> on mitä tahansa muuta tyyppiä, käytä <code>Number.FromText</code> sen muuntamiseen <code>number</code>-arvoksi.Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki kohteen &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; Decimal-tyyppinen &lt;code&gt;number&lt;/code&gt;-arvo.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
