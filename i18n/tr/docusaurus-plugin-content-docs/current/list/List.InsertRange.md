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

<code>values</code> içindeki değerleri <code>index</code> konumundaki <code>list</code> içine ekleme ile oluşan yeni bir liste döndürür. Listedeki ilk konum dizin 0'dadır.      <ul>        <li><code>list</code>: Değerlerin ekleneceği hedef liste.</li>        <li><code>index</code>: Değerlerin ekleneceği hedef listenin (<code>list</code>) dizini. Listenin dizin 0 konumundaki ilk konum.</li>        <li><code>values</code>: <code>list</code> öğesine eklenecek değerlerin listesi.</li>      </ul>


## Examples

### Example #1 
(\{3, 4}) listesini dizin 2 konumunda (\{1, 2, 5}) hedef listesine ekler.
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
(\{1, \{1.1, 1.2}}) iç içe yerleştirilmiş listeli listeyi dizin 0 konumunda (\{2, 3, 4}) hedef listesine ekler.
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
