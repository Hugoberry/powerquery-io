---
title: List.FindText
---

# List.FindText


Pateikiamas reikšmių sąrašas (įskaitant įrašo laukus), kuriame yra nurodytas tekstas.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Pateikiamas sąrašas reikšmių iš sąrašo `list`, kuriame yra reikšmė `text`.


## Examples

### Example #1
Rasti teksto reikšmes sąraše \{"a", "b", "ab"\}, kurios atitinka "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
