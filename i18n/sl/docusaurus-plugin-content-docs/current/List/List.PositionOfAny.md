---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Vrne prvi odmik vrednosti na seznamu.


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

Vrne odmik na seznamu <code>list</code> za prvo pojavitev vrednosti na seznamu <code>values</code>. Vrne –1, če ni najdena nobena pojavitev.    Določite lahko izbirni parameter pojavitve <code>occurrence</code>.<ul>   <li><code>occurrence</code>: največje število pojavitev, ki so lahko vrnjene.</li></ul>


## Examples

### Example #1 
Poiščite prvi položaj na seznamu \{1, 2, 3}, na katerem je prikazana vrednost 2 ali 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
