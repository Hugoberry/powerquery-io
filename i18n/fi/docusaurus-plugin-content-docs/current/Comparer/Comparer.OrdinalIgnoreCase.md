---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Palauttaa vertailufunktion, jonka kirjainkoko ei ole merkitsevä ja joka käyttää arvojen vertaamiseen järjestyslukusääntöjä.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Palauttaa kirjainkokoa merkitsemättömän vertailufunktion, joka käyttää järjestyslukusääntöjä annettuja arvoja <code>x</code> ja <code>y</code>.<br />        <br />        Vertailufunktio hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen mukaan, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen.    


## Examples

### Example #1 
Vertaa käyttämällä järjestyslukusääntöjä, joissa kirjainkoko ei ole merkitsevä, kohdetta &#34;Abc&#34; ja &#34;abc&#34;. Huomaa, että &#34;Abc&#34; on pienempi kuin &#34;abc&#34; käytettäessä kohdetta &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
