---
title: List.Difference
---

# List.Difference


## Description

Vrne razliko dveh danih seznamov.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Vrne elemente na seznamu <code>list1</code>, ki niso prikazani na seznamu <code>list2</code>. Podvojene vrednosti so podprte.    Določite lahko izbirno vrednost kriterijev enakosti <code>equationCriteria</code> za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Poiščite elemente na seznamu \{1, 2, 3, 4, 5}, ki niso prikazani na seznamu \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Poiščite elemente na seznamu \{1, 2}, ki niso prikazani na seznamu \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
