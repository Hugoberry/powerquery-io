---
title: List.Last
---

# List.Last


## Description

Zwraca ostatnią wartość z listy lub określoną wartość domyślną, gdy lista jest pusta.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Zwraca ostatni element z listy <code>list</code> lub opcjonalną wartość domyślną <code>defaultValue</code>, gdy lista jest pusta.    Jeśli lista jest pusta i nie określono wartości domyślnej, funkcja zwraca wartość <code>null</code>.


## Examples

### Example #1 
Znajdź ostatnią wartość na liście \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Znajdź ostatnią wartość na liście \{} lub zwróć -1, gdy lista jest pusta.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
