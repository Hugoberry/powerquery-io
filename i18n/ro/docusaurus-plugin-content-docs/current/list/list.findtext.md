---
title: List.FindText
---

# List.FindText


Returnează o listă de valori (inclusiv câmpurile pentru înregistrare) care conţin textul specificat.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Returnează o listă de valori din lista `list` ce conţin valoarea `text`.


## Examples

### Example #1
Găsiţi valorile text din lista \{"a", "b", "ab"\} care se potrivesc cu „a”.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
