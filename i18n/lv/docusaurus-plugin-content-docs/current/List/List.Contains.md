---
title: List.Contains
---

# List.Contains


## Description

Tiek norādīts, vai sarakstā ir ietverta konkrētā vērtība.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Norāda, vai sarakstā <code>list</code> ir ietverta vērtība <code>value</code>.    Ja sarakstā tiek atrasta vērtība, tiek atgriezta vērtība True, pretējā gadījumā tiek atgriezta vērtība False. Varat norādīt papildu vienādojuma kritēriju vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Uzziniet, vai sarakstā \{1, 2, 3, 4, 5} ir ietverta vērtība 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai sarakstā \{1, 2, 3, 4, 5} ir ietverta vērtība 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
