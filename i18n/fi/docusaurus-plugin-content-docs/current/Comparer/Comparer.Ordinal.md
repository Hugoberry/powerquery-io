---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Palauttaa vertailufunktion, joka käyttää arvojen vertaamiseen järjestyslukusääntöjä.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Palauttaa vertailufunktion, joka käyttää järjestyslukusääntöjä annettuja arvoja <code>x</code> ja <code>y</code>.<br />      <br />      Vertailufunktio hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen mukaan, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen.    


## Examples

### Example #1 
Vertaa järjestyslukusääntöjen avulla, ovatko &#34;encyclopædia&#34; ja &#34;encyclopaedia&#34; samat. Huomaa, että nämä vastaavat &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
