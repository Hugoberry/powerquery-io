---
title: List.Range
---

# List.Range


## Description

Ауытқудан басталатын тізімнің ішкі жиынын қайтарады.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

<code>list</code> ауытқуынан басталатын тізімнің ішкі жиынын қайтарады. <code>offset</code> міндетті емес параметрі жиындағы элементтердің ең көп санын орнатады.


## Examples

### Example #1 
1 мен 10 арасындағы сандар тізімінің 6 ауытқуында басталатын жиынды анықтау.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
1 мен 10 арасындағы сандар тізімінің 6 ауытқуында басталатын 2 ұзындығы бар жиынды анықтау.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
