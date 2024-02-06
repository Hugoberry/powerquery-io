---
title: List.PositionOf
---

# List.PositionOf


Returnerar förskjutningen eller förskjutningarna för ett värde i en lista.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Returnerar förskjutningen där värdet <code>value</code> förekommer i listan <code>list</code>. Returnerar -1 om värdet inte hittas.    En valfri förekomstparameter (<code>occurrence</code>) kan anges.<ul>   <li><code>occurrence</code>: Det högsta antalet förekomster som ska rapporteras.</li></ul>


## Examples

### Example #1 
Hitta positionen i listan \{1, 2, 3} där värdet 3 förekommer.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
