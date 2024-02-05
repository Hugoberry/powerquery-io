---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Returnerar den första förskjutningen för ett värde i en lista.


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

Returnerar förskjutningen i listan <code>list</code> för den första förekomsten av ett värde i listan <code>values</code>. Returnerar -1 om ingen förekomst hittas.    En valfri förekomstparameter (<code>occurrence</code>) kan anges.<ul>   <li><code>occurrence</code>: Det högsta antalet förekomster som kan returneras.</li></ul>


## Examples

### Example #1 
Hitta den första positionen i listan \{1, 2, 3} där värdet 2 eller 3 förekommer.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
