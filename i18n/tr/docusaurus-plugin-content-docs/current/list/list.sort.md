---
title: List.Sort
---

# List.Sort


Belirtilen ölçüte göre bir veri listesini sıralar.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Belirtilen isteğe bağlı ölçüte göre `list` veri listesini sıralar. Karşılaştırma ölçütü olarak `comparisonCriteria` isteğe bağlı parametresi belirtilebilir. Bu, şu değerleri alabilir:

-   Sırayı denetlemek için karşılaştırma ölçütü bir Order enum değeri olabilir. (`Order.Descending`, `Order.Ascending`).
-   Sıralama için kullanılacak anahtarı hesaplamak üzere 1 bağımsız değişkenden oluşan bir işlev kullanılabilir.
-   Bir anahtar ve denetim sırası seçmek için, karşılaştırma ölçütü anahtar ile sırayı içeren bir liste olabilir (`{each 1 / _, Order.Descending}`).
-   Karşılaştırmayı tam olarak denetlemek için 2 bağımsız değişkenden oluşan bir işlev kullanılabilir (örneğin Value.Compare). Bu işleve listeden iki öğe (rastgele sırada herhangi iki öğe) geçirilir. İşlev şu değerlerden birini döndürmelidir:
    -   `-1`: İlk öğe, ikinci öğeden daha azdır.
    -   `0`: Öğeler eşittir.
    -   `1`: İlk öğe, ikinci öğeden büyüktür.


## Examples

### Example #1
\{2, 3, 1\} listesini sıralar.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
\{2, 3, 1\} listesini azalan düzende sıralar.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
\{2, 3, 1\} listesini Value.Compare yöntemini kullanarak azalan düzende sıralar.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
