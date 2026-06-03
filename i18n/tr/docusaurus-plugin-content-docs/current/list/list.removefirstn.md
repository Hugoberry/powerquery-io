---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Listenin başında belirtilen sayıda öğeyi atlayan bir liste döndürür.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

`list` listesinin ilk öğesini kaldıran bir liste döndürür. Eğer `list` boş bir liste ise boş bir liste döndürülür. Bu işlev, aşağıda listelendiği gibi birden fazla değerin kaldırılmasını desteklemek için isteğe bağlı bir parametre (`countOrCondition`) alır.

-   Bir sayı belirtilirse, o kadar öğe kaldırılır.
-   Bir koşul belirtilirse, `list` başındaki eşleşen tüm öğeler kaldırılır.
-   Bu parametre null ise varsayılan davranış gözlemlenir.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} listesinden ilk 3 sayı hariç olmak üzere liste oluşturur.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
\{5, 4, 2, 6, 1\} listesinden 3'ten az olan bir sayı ile başlayan bir liste oluşturur.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
