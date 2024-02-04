---
title: List.Min
---

# List.Min


## Description

Gibt den kleinsten Wert zurück. Ist die Liste leer, wird der Standardwert zurückgegeben.


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

Gibt das kleinste Element in der Liste "<code>list</code>" zurück. Ist die Liste leer, wird der optionale Standardwert "<code>default</code>" zurückgegeben.    Ein optionaler comparisonCriteria-Wert (<code>comparisonCriteria</code>) kann angegeben werden, um zu bestimmen, wie die Elemente in der Liste verglichen werden sollen. Ist dieser Parameter NULL, wird die standardmäßige Vergleichsfunktion verwendet.


## Examples

### Example #1 
Ermittelt den kleinsten Wert in der Liste &#34;\{1, 4, 7, 3, -2, 5}&#34;.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Ermittelt den kleinsten Wert in der Liste &#34;\{}&#34;. Ist die Liste leer, wird &#34;-1&#34; zurückgegeben. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
