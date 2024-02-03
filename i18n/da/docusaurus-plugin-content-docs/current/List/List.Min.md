---
title: List.Min
---

# List.Min


## Description

Returnerer den mindste værdi eller standardværdien, hvis listen er tom.


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

Returnerer det mindste element på listen <code>list</code> eller den valgfrie standardværdi <code>default</code>, hvis listen er tom.     Du kan angive en valgfri værdi af typen comparisonCriteria, <code>comparisonCriteria</code>, for at bestemme, hvordan elementerne på listen skal sammenlignes. Hvis denne parameter er null, bruges standardfunktionen til sammenligning.


## Examples

### Example #1 
Find den mindste værdi på listen \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Find den mindste værdi på listen \{}, eller returner -1, hvis listen er tom. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
