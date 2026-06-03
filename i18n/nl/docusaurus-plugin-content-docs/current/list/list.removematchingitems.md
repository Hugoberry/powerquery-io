---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Verwijdert alle instanties van de invoerwaarden.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Verwijdert alle instanties van de opgegeven waarden in `list2` uit de lijst `list1`. Als de waarden in `list2` niet in `list1` staan, wordt de oorspronkelijke lijst geretourneerd. Er kan een optionele waarde voor de vergelijkingsvoorwaarde, `equationCriteria`, voor het controleren van de gelijkheidstest worden opgegeven.


## Examples

### Example #1
Een lijst van \{1, 2, 3, 4, 5, 5\} zonder \{1, 5\} maken.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
