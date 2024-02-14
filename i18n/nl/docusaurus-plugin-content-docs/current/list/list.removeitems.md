---
title: List.RemoveItems
---

# List.RemoveItems


Verwijdert items van list1 die in de lijst staan.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Verwijdert alle instanties van de opgegeven waarden in de <code>list2</code> van <code>list1</code>. Als de waarden in <code>list2</code> niet in <code>list1</code> staan, wordt de oorspronkelijke lijst geretourneerd.


## Examples

### Example #1 
De items in de lijst \{2, 4, 6} uit de lijst \{1, 2, 3, 4, 2, 5, 5} verwijderen.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
