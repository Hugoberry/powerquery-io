---
title: List.Positions
---

# List.Positions


## Description

Vrne seznam odmikov za vnos.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Vrne seznam odmikov za vhodni seznam <code>list</code>.    Ko spreminjate seznam s funkcijo "List.Transform", lahko uporabite seznam položajev, da omogočite pretvorbi dostop do položaja.


## Examples

### Example #1 
Poiščite odmike vrednosti na seznamu \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
