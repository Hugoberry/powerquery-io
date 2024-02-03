---
title: List.Sort
---

# List.Sort


## Description

Belirtilen ölçüte göre bir veri listesini sıralar.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Belirtilen isteğe bağlı ölçüte göre <code>list</code> veri listesini sıralar.    Karşılaştırma ölçütü olarak <code>comparisonCriteria</code> isteğe bağlı parametresi belirtilebilir. Bu, şu değerleri alabilir:    <ul>    <li> Sırayı denetlemek için karşılaştırma ölçütü bir Order enum değeri olabilir. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Sıralama için kullanılacak anahtarı hesaplamak üzere 1 bağımsız değişkenden oluşan bir işlev kullanılabilir. </li>    <li> Bir anahtar ve denetim sırası seçmek için, karşılaştırma ölçütü anahtar ile sırayı içeren bir liste olabilir (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Karşılaştırmayı tam olarak denetlemek için 2 bağımsız değişkenden oluşan bir işlev kullanılabilir. Bu işleve listeden iki öğe (rastgele sırada herhangi iki öğe) geçirilir. İşlev şu değerlerden birini döndürmelidir:        <ul>            <li> <code>-1</code>: İlk öğe, ikinci öğeden daha azdır.</li>            <li> <code>0</code>: Öğeler eşittir.</li>            <li> <code>1</code>: İlk öğe, ikinci öğeden büyüktür.</li>        </ul>        Value. Compare, bu mantığı temsil etmek için kullanılabilecek bir yöntemdir. </li>    </ul>


## Examples

### Example #1 
\{2, 3, 1} listesini sıralar.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
\{2, 3, 1} listesini azalan düzende sıralar.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
\{2, 3, 1} listesini Value.Compare yöntemini kullanarak azalan düzende sıralar.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
