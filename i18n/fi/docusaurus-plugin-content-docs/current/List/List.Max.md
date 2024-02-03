---
title: List.Max
---

# List.Max


## Description

Palauttaa enimmäisarvon tai oletusarvon, jos luettelo on tyhjä.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Palauttaa luettelon <code>list</code> suurimman kohteen tai valinnaisen oletusarvon <code>default</code>, jos luettelo on tyhjä.    Valinnainen comparisonCriteria-arvo <code>comparisonCriteria</code> voidaan määrittää luettelon kohteiden vertailutavan määrittämistä varten. Jos tämä parametri on tyhjäarvo, käytetään oletusvertailutoimintoa.


## Examples

### Example #1 
Selvitä luettelon \{1, 4, 7, 3, -2, 5} enimmäisarvo.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Selvitä luettelon \{} enimmäisarvo tai palauta arvo -1, jos se on tyhjä. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
