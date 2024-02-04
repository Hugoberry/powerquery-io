---
title: List.Last
---

# List.Last


## Description

Gibt den letzten Wert der Liste zurück. Ist die Liste leer, wird der angegebene Standardwert zurückgegeben.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Gibt das letzte Element in der Liste "<code>list</code>" zurück. Ist die Liste leer, wird der optionale Standardwert "<code>defaultValue</code>" zurückgegeben.    Ist die Liste leer und kein Standardwert angegeben, gibt die Funktion <code>null</code> zurück.


## Examples

### Example #1 
Ermittelt den letzten Wert in der Liste &#34;\{1, 2, 3}&#34;.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Ermittelt den letzten Wert in der Liste &#34;\{}&#34;. Ist die Liste leer, wird &#34;-1&#34; zurückgegeben.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
