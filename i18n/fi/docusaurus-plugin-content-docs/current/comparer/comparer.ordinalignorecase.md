---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Palauttaa vertailufunktion, jonka kirjainkoko ei ole merkitsevä ja joka käyttää arvojen vertaamiseen järjestyslukusääntöjä.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Palauttaa kirjainkokoa merkitsemättömän vertailufunktion, joka käyttää järjestyslukusääntöjä annettuja arvoja `x` ja `y`.  
  
Vertailufunktio hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen mukaan, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen.


## Examples

### Example #1
Vertaa käyttämällä järjestyslukusääntöjä, joissa kirjainkoko ei ole merkitsevä, kohdetta "Abc" ja "abc". Huomaa, että "Abc" on pienempi kuin "abc" käytettäessä kohdetta `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
