---
title: List.InsertRange
---

# List.InsertRange


Verilen dizindeki bir listeye değer ekler.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

`values` içindeki değerleri `index` konumundaki `list` içine ekleme ile oluşan yeni bir liste döndürür. Listedeki ilk konum dizin 0'dadır.

-   `list`: Değerlerin ekleneceği hedef liste.
-   `index`: Değerlerin ekleneceği hedef listenin (`list`) dizini. Listenin dizin 0 konumundaki ilk konum.
-   `values`: `list` öğesine eklenecek değerlerin listesi.


## Examples

### Example #1
(\{3, 4\}) listesini dizin 2 konumunda (\{1, 2, 5\}) hedef listesine ekler.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
(\{1, \{1.1, 1.2\}\}) iç içe yerleştirilmiş listeli listeyi dizin 0 konumunda (\{2, 3, 4\}) hedef listesine ekler.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
