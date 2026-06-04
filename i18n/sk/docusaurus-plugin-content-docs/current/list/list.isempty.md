---
title: List.IsEmpty
---

# List.IsEmpty


Vráti hodnotu True, ak je zoznam prázdny.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Vráti hodnotu `true`, ak zoznam `list` neobsahuje žiadne hodnoty (dĺžka 0). Ak zoznam obsahuje hodnoty (dĺžka > 0), vráti hodnotu `false`.


## Examples

### Example #1
Zistite, či je zoznam \{\} prázdny.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Zistite, či je zoznam \{1, 2\} prázdny.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
