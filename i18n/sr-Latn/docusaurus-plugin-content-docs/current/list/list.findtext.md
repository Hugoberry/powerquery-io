---
title: List.FindText
---

# List.FindText


Vraća listu vrednosti (uključujući polja zapisa) koja sadrži navedeni tekst.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Vraća listu vrednosti sa liste `list` koja je sadržala vrednost `text`.


## Examples

### Example #1
Pronalaženje tekstualnih vrednosti sa liste \{"a", "b", "ab"\} koje se podudaraju sa „a“.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
