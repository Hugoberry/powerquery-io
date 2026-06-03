---
title: List.Difference
---

# List.Difference


Returnerar skillnaden mellan de två angivna listorna.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerar objekten i listan `list1` som inte finns med i listan `list2`. Dubblettvärden stöds. Ett valfritt ekvationsvillkorsvärde, `equationCriteria`, kan anges för att hantera likhetstestning.


## Examples

### Example #1
Hitta de objekt i listan \{1, 2, 3, 4, 5\} som inte finns med i \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Hitta de objekt i listan \{1, 2\} som inte finns med i \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
