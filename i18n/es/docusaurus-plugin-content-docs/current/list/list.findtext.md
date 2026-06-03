---
title: List.FindText
---

# List.FindText


Devuelve una lista de valores (campos de registro incluidos) que contienen el texto especificado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Devuelve una lista de valores de la lista `list` que contiene el valor `text`.


## Examples

### Example #1
Buscar los valores de texto en la lista \{"a", "b", "ab"\} que coinciden con "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
