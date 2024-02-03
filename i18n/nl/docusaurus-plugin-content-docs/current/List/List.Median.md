---
title: List.Median
---

# List.Median


## Description

Retourneert de mediaanwaarde uit de lijst.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Hiermee wordt het mediaanitem in de lijst <code>list</code> als resultaat geretourneerd. Deze functie retourneert <code>null</code> als de lijst geen andere waarden dan <code>null</code> bevat. Als er een even aantal items is, kiest de functie de kleinste van de twee mediaanitems, tenzij de lijst uitsluitend bestaat uit waarden voor datum/tijd, duur, getallen of tijden. In dat geval wordt het gemiddelde van de twee items berekend.


## Examples

### Example #1 
De mediaan van de lijst &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; zoeken.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
