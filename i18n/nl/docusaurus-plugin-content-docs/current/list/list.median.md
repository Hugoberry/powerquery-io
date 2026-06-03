---
title: List.Median
---

# List.Median


Retourneert de mediaanwaarde uit de lijst.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Hiermee wordt het mediaanitem in de lijst `list` als resultaat geretourneerd. Deze functie retourneert `null` als de lijst geen andere waarden dan `null` bevat. Als er een even aantal items is, kiest de functie de kleinste van de twee mediaanitems, tenzij de lijst uitsluitend bestaat uit waarden voor datum/tijd, duur, getallen of tijden. In dat geval wordt het gemiddelde van de twee items berekend.


## Examples

### Example #1
De mediaan van de lijst `{5, 3, 1, 7, 9}` zoeken.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
