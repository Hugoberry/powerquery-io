---
title: List.Range
---

# List.Range


Bir uzaklıktan başlayarak listenin bir alt kümesini döndürür.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

`offset` konumundan başlayan bir `list` alt kümesini döndürür. İsteğe bağlı bir parametre olan `count`, alt kümedeki maksimum öğe sayısını belirler.


## Examples

### Example #1
1-10 arasındaki sayıları içeren listenin 6 uzaklığından başlayan alt kümesini bulur.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
1-10 arasındaki sayıları içeren listenin 6 uzaklığından başlayan 2 uzunluğuna sahip alt kümesini bulur.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
