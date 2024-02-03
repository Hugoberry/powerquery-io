---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Tiek norādīts, vai sarakstā ir ietverta kāda no cita saraksta vērtībām.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Tiek norādīts, vai sarakstā <code>list</code> ir ietverta kāda no cita saraksta <code>values</code> vērtībām.        Ja sarakstā tiek atrasta vērtība, tiek atgriezta vērtība True, pretējā gadījumā tiek atgriezta vērtība False. Varat norādīt papildu vienādojuma kritērija vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Uzziniet, vai sarakstā \{1, 2, 3, 4, 5} ir ietverta vērtība 3 vai 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai sarakstā \{1, 2, 3, 4, 5} ir ietverta vērtība 6 vai 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
