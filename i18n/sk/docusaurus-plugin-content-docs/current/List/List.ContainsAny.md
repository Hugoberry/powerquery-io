---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Udáva, či zoznam obsahuje niektorú z hodnôt v inom zozname.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Udáva, či zoznam <code>list</code> obsahuje niektorú z hodnôt v inom zozname <code>values</code>.        Vráti hodnotu True, ak sa príslušná hodnota nájde v zozname, v opačnom prípade vráti hodnotu False. Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Zistite, či zoznam \{1, 2, 3, 4, 5} obsahuje číslo 3 alebo 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Zistite, či zoznam \{1, 2, 3, 4, 5} obsahuje číslo 6 alebo 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
