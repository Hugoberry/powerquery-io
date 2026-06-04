---
title: List.FindText
---

# List.FindText


Tiek atgriezts to vērtību (tostarp ierakstu lauku) saraksts, kurās ir ietverts norādītais teksts.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Tiek atgriezts to saraksta `list` vērtību saraksts, kurās ir ietverta vērtība `text`.


## Examples

### Example #1
Iegūstiet saraksta \{"a", "b", "ab"\} teksta vērtības, kas atbilst vērtībai a.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
