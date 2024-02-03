---
title: List.Contains
---

# List.Contains


## Description

Udáva, či zoznam obsahuje hodnotu.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Udáva, či zoznam <code>list</code> obsahuje hodnotu <code>value</code>.    Vráti hodnotu True, ak sa príslušná hodnota nájde v zozname, v opačnom prípade vráti hodnotu False. Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Zistite, či zoznam \{1, 2, 3, 4, 5} obsahuje číslo 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Zistite, či zoznam \{1, 2, 3, 4, 5} obsahuje číslo 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
