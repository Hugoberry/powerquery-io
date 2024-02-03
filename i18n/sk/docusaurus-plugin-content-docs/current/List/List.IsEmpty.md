---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Vráti hodnotu True, ak je zoznam prázdny.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Vráti hodnotu <code>true</code>, ak zoznam <code>list</code> neobsahuje žiadne hodnoty (dĺžka 0). Ak zoznam obsahuje hodnoty (dĺžka > 0), vráti hodnotu <code>false</code>.


## Examples

### Example #1 
Zistite, či je zoznam \{} prázdny.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Zistite, či je zoznam \{1, 2} prázdny.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
