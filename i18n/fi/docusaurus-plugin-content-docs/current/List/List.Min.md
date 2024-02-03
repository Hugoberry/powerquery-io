---
title: List.Min
---

# List.Min


## Description

Palauttaa vähimmäisarvon tai oletusarvon, jos luettelo on tyhjä.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Palauttaa luettelon <code>list</code> pienimmän kohteen tai valinnaisen oletusarvon <code>default</code>, jos luettelo on tyhjä.    Valinnainen comparisonCriteria-arvo <code>comparisonCriteria</code> voidaan määrittää luettelon kohteiden vertailutavan määrittämistä varten. Jos tämä parametri on tyhjäarvo, käytetään oletusvertailutoimintoa.


## Examples

### Example #1 
Selvitä luettelon \{1, 4, 7, 3, -2, 5} vähimmäisarvo.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Selvitä luettelon \{} vähimmäisarvo tai palauta arvo -1, jos se on tyhjä. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
