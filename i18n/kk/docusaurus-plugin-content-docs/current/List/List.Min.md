---
title: List.Min
---

# List.Min


## Description

Ең аз мәнді немесе бос тізім үшін әдепкі мәнді қайтарады.


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

<code>list</code> тізіміндегі ең кіші элементті немесе тізім бос болса, <code>default</code> міндетті емес әдепкі мәнін қайтарады.    Тізімдегі элементтерді салыстыру әдісін анықтау үшін <code>comparisonCriteria</code> comparisonCriteria міндетті емес мәнін көрсетуге болады. Егер бұл параметрдің мәні нөл болса, әдепкі салыстыру құралы пайдаланылады.


## Examples

### Example #1 
\{1, 4, 7, 3, -2, 5} тізіміндегі ең кіші мәнді анықтау.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
\{} тізіміндегі ең кіші мәнді анықтау немесе ол бос болса, -1 мәнін қайтару. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
