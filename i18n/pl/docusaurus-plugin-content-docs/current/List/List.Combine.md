---
title: List.Combine
---

# List.Combine


## Description

Zwraca jedną listę będącą wynikiem połączenia wielu list.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Przyjmuje listę list <code>lists</code> i scala te listy w jedną nową listę.


## Examples

### Example #1 
Połącz dwie proste listy — \{1, 2} i \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Połącz dwie listy — \{1, 2} i \{3, \{4, 5}} — z których jedna zawiera listę zagnieżdżoną.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
