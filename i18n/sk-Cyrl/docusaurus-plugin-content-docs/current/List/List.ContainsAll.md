---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Udáva, či zoznam obsahuje všetky hodnoty v inom zozname.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Udáva, či zoznam <code>list</code> obsahuje všetky hodnoty v inom zozname <code>values</code>.    Vráti hodnotu True, ak sa príslušná hodnota nájde v zozname, v opačnom prípade vráti hodnotu False. Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Zistite, či zoznam \{1, 2, 3, 4, 5} obsahuje čísla 3 a 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Zistite, či zoznam \{1, 2, 3, 4, 5} obsahuje čísla 5 a 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
