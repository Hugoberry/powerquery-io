---
title: List.Min
---

# List.Min


Returnează valoarea minimă sau valoarea implicită pentru o listă necompletată.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Returnează elementul minim din lista `list` sau valoarea implicită opțională, `default`, dacă lista este goală. O valoare comparisonCriteria opțională, `comparisonCriteria`, poate fi specificată pentru a determina modul de comparare a elementelor din listă. Dacă acest parametru este nul, atunci se utilizează funcția de comparare implicită.


## Examples

### Example #1
Aflaţi numărul minim din lista \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Aflaţi numărul minim din lista \{\} sau returnaţi -1 dacă este necompletată.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
