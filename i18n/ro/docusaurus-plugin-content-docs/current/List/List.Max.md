---
title: List.Max
---

# List.Max


## Description

Returnează valoarea maximă sau valoarea implicită pentru o listă necompletată.


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

Returnează elementul maxim din lista <code>list</code> sau valoarea implicită opțională, <code>default</code>, dacă lista este goală.    O valoare comparisonCriteria opțională, <code>comparisonCriteria</code>, poate fi specificată pentru a determina modul de comparare a elementelor din listă. Dacă acest parametru este nul, atunci se utilizează funcția de comparare implicită.


## Examples

### Example #1 
Aflaţi numărul maxim din lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Aflaţi numărul maxim din lista \{} sau returnaţi -1 dacă este necompletată. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
