---
title: List.PositionOf
---

# List.PositionOf


## Description

Vrne odmike vrednosti na seznamu.


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

Vrne odmik, v katerem je vrednost <code>value</code> prikazana na seznamu <code>list</code>. Vrne –1, če vrednost ni prikazana.     Določite lahko izbirni parameter pojavitve <code>occurrence</code>.<ul>   <li><code>occurrence</code>: največje število pojavitev, ki bodo sporočene.</li></ul>


## Examples

### Example #1 
Poiščite položaj na seznamu \{1, 2, 3}, na katerem je prikazana vrednost 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
