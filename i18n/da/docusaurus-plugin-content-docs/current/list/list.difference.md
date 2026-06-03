---
title: List.Difference
---

# List.Difference


Returnerer differencen mellem de to angivne lister.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerer de elementer på listen `list1`, der ikke vises på listen `list2`. Dublerede værdier understøttes. Du kan angive en valgfri kriterieværdi for ligningen, `equationCriteria`, for at styre kvalitetstesten.


## Examples

### Example #1
Find de elementer på listen \{1, 2, 3, 4, 5\}, der ikke vises i \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Find de elementer på listen \{1, 2\}, der ikke vises i \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
