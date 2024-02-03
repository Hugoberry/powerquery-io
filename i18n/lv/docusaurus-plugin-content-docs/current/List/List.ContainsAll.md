---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Tiek norādīts, vai sarakstā ir ietvertas visas cita saraksta vērtības.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Tiek norādīts, vai sarakstā <code>list</code> ir ietvertas visas cita saraksta <code>values</code> vērtības.    Ja sarakstā tiek atrasta vērtība, tiek atgriezta vērtība True, pretējā gadījumā tiek atgriezta vērtība False. Varat norādīt papildu vienādojuma kritērija vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Uzziniet, vai sarakstā \{1, 2, 3, 4, 5} ir ietvertas vērtības 3 un 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai sarakstā \{1, 2, 3, 4, 5} ir ietvertas vērtības 5 un 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
