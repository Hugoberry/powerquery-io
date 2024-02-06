---
title: List.First
---

# List.First


Gibt den ersten Wert der Liste zurück. Ist die Liste leer, wird der angegebene Standardwert zurückgegeben.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Gibt das erste Element in der Liste "<code>list</code>" zurück. Ist die Liste leer, wird der optionale Standardwert "<code>defaultValue</code>" zurückgegeben.    Ist die Liste leer und kein Standardwert angegeben, gibt die Funktion <code>null</code> zurück.


## Examples

### Example #1 
Ermittelt den ersten Wert in der Liste &#34;\{1, 2, 3}&#34;.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Ermittelt den ersten Wert in der Liste &#34;\{}&#34;. Ist die Liste leer, wird &#34;-1&#34; zurückgegeben.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
