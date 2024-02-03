---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Returnerer første forskydning for en værdi på en liste.


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

Returnerer forskydningen på listen <code>list</code> for første forekomst af en værdi på en liste <code>values</code>. Returnerer -1, hvis der ikke blev fundet nogen forekomster.    Du kan angive en valgfri forekomstparameter, <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Det højeste antal forekomster, der kan returneres.</li></ul>


## Examples

### Example #1 
Find den første position på listen \{1, 2, 3}, hvor værdien 2 eller 3 vises.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
