---
title: List.PositionOf
---

# List.PositionOf


## Description

Returnerer forskydningen for en værdi på en liste.


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

Returnerer den forskydning, hvor værdien <code>value</code> vises på listen <code>list</code>. Returnerer -1, hvis værdien ikke vises.    Du kan angive en valgfri forekomstparameter, <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Det højeste antal forekomster, der kan rapporteres.</li></ul>


## Examples

### Example #1 
Find den position på listen \{1, 2, 3}, hvor værdien 3 vises.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
