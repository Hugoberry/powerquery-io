---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Past elke vervanging van \{ old, new } toe.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Voert de opgegeven vervangingen door in de lijst <code>list</code>. Een vervanging <code>replacements</code> bestaat uit een lijst met twee waarden, de oude waarde en de nieuwe waarde, die worden aangeleverd als een lijst.    Er kan een optionele waarde voor de vergelijkingsvoorwaarde, <code>equationCriteria</code>, voor het controleren van de gelijkheidstest worden opgegeven.


## Examples

### Example #1 
Een lijst van \{1, 2, 3, 4, 5} maken, waarmee de waarde 5 wordt vervangen door -5 en de waarde 1 door -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
