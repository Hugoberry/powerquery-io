---
title: Byte.From
---

# Byte.From


## Description

Luo 8-bittisen kokonaisluvun annetusta arvosta.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Palauttaa 8-bittisen kokonaislukumuotoisen <code>number</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>-tyhjäarvo, <code>Byte.From</code> palauttaa arvon <code>null</code>. Jos annettu <code>value</code> on <code>number</code>, joka on 8-bittisen kokonaisluvun alueella ilman murtolukuosaa, palautetaan <code>value</code>. Jos sillä on murtolukuosa, luku pyöristetään käyttäen määritettyä pyöristystilaa. Oletuspyöristystila on <code>RoundingMode.ToEven</code>. Jos annettu <code>value</code> on mitä tahansa muuta tyyppiä, käytetään <code>Number.FromText</code> sen muuntamiseen <code>number</code>-arvoksi.. Jos haluat tietoja käytettävissä olevista pyöristystiloista, katso <code>Number.Round</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki 8-bittinen kokonaislukumuotoinen &lt;code&gt;number&lt;/code&gt;-arvo kohteesta &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hanki kohteen &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; 8-bittinen kokonaislukumuotoinen &lt;code&gt;number&lt;/code&gt;-arvo käyttämällä kohdetta &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
