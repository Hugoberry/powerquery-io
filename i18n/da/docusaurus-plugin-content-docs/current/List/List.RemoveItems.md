---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Fjerner elementer fra liste1, der findes på listen.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Fjerner alle forekomster af de angivne værdier i <code>list2</code> fra <code>list1</code>. Hvis værdierne i <code>list2</code> ikke findes i <code>list1</code>, returneres den oprindelige liste.


## Examples

### Example #1 
Fjern elementerne på listen \{2, 4, 6} fra listen \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
