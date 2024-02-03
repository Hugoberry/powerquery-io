---
title: List.Max
---

# List.Max


## Description

Retourneert de maximumwaarde of de standaardwaarde voor een lege lijst.


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

Hiermee wordt het maximumitem in de lijst <code>list</code> geretourneerd of de optionele standaardwaarde <code>default</code> als de lijst leeg is. Een optionele comparisonCriteria-waarde, <code>comparisonCriteria</code>, kan worden opgegeven om te bepalen hoe de items in de lijst moeten worden vergeleken. Als deze parameter null is, wordt de standaardvergelijkingsfunctie gebruikt.


## Examples

### Example #1 
De maximale waarde in de lijst \{1, 4, 7, 3, -2, 5} zoeken.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
De maximale waarde in de lijst \{} opzoeken of -1 retourneren als de lijst leeg is. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
