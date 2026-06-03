---
title: List.ContainsAll
---

# List.ContainsAll


Listenin başka bir listedeki tüm değerleri içerip içermediğini belirtir.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Listenin başka bir listedeki tüm değerleri içerip içermediğini gösterir. Tüm değerler listede bulunursa `true` döndürür, aksi takdirde `false` döndürür.

-   `list`: Aranacak liste.
-   `values`: İlk listede aranacak değerlerin listesi.
-   `equationCriteria`: (İsteğe bağlı) İki değerin eşit olup olmadığını belirlemek için kullanılan karşılaştırıcı.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} listesinin 3 ve 4'ü içerip içermediğini belirleyin.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} listesinin 5 ve 6'yı içerip içermediğini belirleyin.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Büyük/küçük harf ayrımını yoksayarak listede bir köpek ve bir atın bulunup bulunmadığını belirtin.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Listede 8 Nisan 2022 ve 6 Temmuz 2021 tarihlerinin bulunup bulunmadığını belirtin.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
