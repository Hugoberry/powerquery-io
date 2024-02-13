---
title: List.Reverse
---

# List.Reverse


Keert de volgorde van waarden in de lijst om.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Retourneert een lijst met de waarden in de lijst <code>list</code> in omgekeerde volgorde.


## Examples

### Example #1 
Een lijst van \{1..10} in omgekeerde volgorde maken.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
