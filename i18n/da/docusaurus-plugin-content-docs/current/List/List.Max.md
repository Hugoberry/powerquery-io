---
title: List.Max
---

# List.Max


## Description

Returnerer den største værdi eller standardværdien, hvis listen er tom.


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

Returnerer den største værdi på listen <code>list</code> eller den valgfrie standardværdi <code>default</code>, hvis listen er tom.     Du kan angive en valgfri værdi af typen comparisonCriteria, <code>comparisonCriteria</code>, for at bestemme, hvordan elementerne på listen skal sammenlignes. Hvis denne parameter er null, bruges standardfunktionen til sammenligning.


## Examples

### Example #1 
Find den største værdi på listen \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Find den største værdi på listen \{}, eller returner -1, hvis listen er tom. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
