---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Odstrani elemente iz &#34;list1&#34;, ki so na seznamu.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Odstrani vse pojavitve danih vrednosti na seznamu <code>list2</code> iz seznama <code>list1</code>. Če vrednosti na seznamu <code>list2</code> ne obstajajo na seznamu <code>list1</code>, je vrnjen izvirni seznam.


## Examples

### Example #1 
Odstranite elemente na seznamu \{2, 4, 6} iz seznama \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
