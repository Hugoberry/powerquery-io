---
title: Currency.From
---

# Currency.From


## Description

Palauttaa currency-arvon annetusta arvosta.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Palauttaa <code>currency</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>-tyhjäarvo, <code>Currency.From</code> palauttaa arvon <code>null</code>. Jos annettu <code>value</code> on <code>number</code>, joka on currency-alueella, kohteen <code>value</code> murtolukuosa pyöristetään 4 desimaalia sisältäväksi luvuksi ja palautetaan. Jos annettu <code>value</code> on mitä tahansa muuta tyyppiä, käytetään <code>Number.FromText</code> sen muuntamiseen <code>number</code>-arvoksiKelvollinen currency-alue on välillä <code>-922,337,203,685,477.5808</code> ja <code>922,337,203,685,477.5807</code>. Kohteessa <code>Number.Round</code> on tietoja käytettävissä olevista pyöristystiloista, oletusasetus on <code>RoundingMode.ToEven</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki kohteen &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; &lt;code&gt;currency&lt;/code&gt;-arvo.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Hanki kohteen &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; &lt;code&gt;currency&lt;/code&gt;-arvo käyttämällä kohdetta &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
