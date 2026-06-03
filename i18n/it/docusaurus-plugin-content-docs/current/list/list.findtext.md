---
title: List.FindText
---

# List.FindText


Restituisce un elenco di valori (compresi i campi di record) contenenti il testo specificato.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Restituisce un elenco di valori dall'elenco `list` che contiene il valore `text`.


## Examples

### Example #1
Trovare i valori di testo nell'elenco \{"a", "b", "ab"\} che corrispondono ad "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
