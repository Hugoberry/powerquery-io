---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Palauttaa vertailufunktion, joka käyttää arvojen vertaamiseen järjestyslukusääntöjä.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Palauttaa vertailufunktion, joka käyttää järjestyslukusääntöjä annettuja arvoja `x` ja `y`.  
  
Vertailufunktio hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen mukaan, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen.


## Examples

### Example #1
Vertaa järjestyslukusääntöjen avulla, ovatko "encyclopædia" ja "encyclopaedia" samat. Huomaa, että nämä vastaavat `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
