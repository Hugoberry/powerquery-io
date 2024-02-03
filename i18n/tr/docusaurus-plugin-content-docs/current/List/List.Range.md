---
title: List.Range
---

# List.Range


## Description

Bir uzaklıktan başlayarak listenin bir alt kümesini döndürür.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

<code>list</code> uzaklığından başlayarak listenin bir alt kümesini döndürür. <code>offset</code> isteğe bağlı parametresi, alt kümedeki öğe sayısı üst sınırını belirler.


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
