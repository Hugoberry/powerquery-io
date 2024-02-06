---
title: List.First
---

# List.First


Zwraca pierwszą wartość z listy lub określoną wartość domyślną, gdy lista jest pusta.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Zwraca pierwszy element z listy <code>list</code> lub opcjonalną wartość domyślną <code>defaultValue</code>, gdy lista jest pusta.    Jeśli lista jest pusta i nie określono wartości domyślnej, funkcja zwraca wartość <code>null</code>.


## Examples

### Example #1 
Znajdź pierwszą wartość na liście \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Znajdź pierwszą wartość na liście \{}. Jeśli lista jest pusta, zwracana jest wartość -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
