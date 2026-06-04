---
title: List.FindText
---

# List.FindText


Vráti zoznam hodnôt (vrátane polí záznamov) obsahujúcich zadaný text.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Vráti zoznam hodnôt zo zoznamu `list`, ktorý obsahoval hodnotu `text`.


## Examples

### Example #1
Nájdite textové hodnoty v zozname \{"a", "b", "ab"\}, ktoré sa zhodujú s hodnotou "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
