---
title: List.Select
---

# List.Select


## Description

Zwraca listę wartości spełniających warunek.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Zwraca listę wartości z listy <code>list</code>, które spełniają warunek wyboru <code>selection</code>.


## Examples

### Example #1 
Znajdź na liście \{1, -3, 4, 9, -2} wartości, które są większe od 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
