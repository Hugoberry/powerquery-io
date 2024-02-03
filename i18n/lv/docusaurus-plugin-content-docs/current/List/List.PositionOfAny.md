---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Tiek atgriezta vērtības pirmā nobīde sarakstā.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Atgriež saraksta <code>values</code> vērtības pirmā gadījuma nobīdi sarakstā <code>list</code>. Ja nav atrasts neviens gadījums, tiek atgriezta vērtība -1.    Varat norādīt papildu gadījumu parametru <code>occurrence</code>.<ul>   <li><code>occurrence</code>: maksimālais atgriežamo gadījumu skaits.</li></ul>


## Examples

### Example #1 
Iegūstiet vērtības 2 vai 3 pirmo pozīciju sarakstā \{1, 2, 3}.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
