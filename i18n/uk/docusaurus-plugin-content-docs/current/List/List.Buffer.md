---
title: List.Buffer
---

# List.Buffer


## Description

Буферизує список.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Буферизує список <code>list</code> у пам'яті. Результатом цього виклику є стабільний список.


## Examples

### Example #1 
Створити стабільну копію списку \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
