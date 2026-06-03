---
title: List.FindText
---

# List.FindText


Devolve uma lista de valores (incluindo campos de registo) que contêm o texto especificado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Devolve uma lista de valores da lista `list` que contêm o valor `text`.


## Examples

### Example #1
Determinar os valores de texto existentes na lista \{"a", "b", "ab"\} que correspondem a "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
