---
title: List.Min
---

# List.Min


## Description

Returnerar det minsta värdet eller standardvärdet för en tom lista.


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

Returnerar det minsta objektet i listan <code>list</code>, eller det valfria standardvärdet <code>default</code> om listan är tom.    Ett valfritt comparisonCriteria-värde, <code>comparisonCriteria</code>, kan anges för att fastställa hur objekten i listan ska jämföras. Om den här parametern är null används standardjämförelsefunktionen.


## Examples

### Example #1 
Hitta det minsta värdet i listan \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Hitta det minsta värdet i listan \{} eller returnera -1 om listan är tom. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
