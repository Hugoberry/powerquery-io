---
title: List.PositionOf
---

# List.PositionOf


## Description

Tiek atgrieztas vērtības nobīdes sarakstā.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Atgriež vērtības <code>value</code> pozīcijas nobīdi sarakstā <code>list</code>. Ja šī vērtība nav ietverta sarakstā, tiek atgriezta vērtība -1.    Varat norādīt papildu gadījumu parametru <code>occurrence</code>.<ul>   <li><code>occurrence</code>: maksimālais parādāmo gadījumu skaits.</li></ul>


## Examples

### Example #1 
Iegūstiet vērtības 3 pozīciju sarakstā \{1, 2, 3}.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
