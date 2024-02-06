---
title: List.Buffer
---

# List.Buffer


Помещает список в буфер.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Помещает список <code>list</code> в буфер в памяти. Результат вызова - стабильный список.


## Examples

### Example #1 
Создание стабильной копии списка \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
