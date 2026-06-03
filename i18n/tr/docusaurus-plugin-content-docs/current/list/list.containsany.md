---
title: List.ContainsAny
---

# List.ContainsAny


Listenin başka bir listedeki herhangi bir değeri içerip içermediğini belirtir.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Listenin başka bir listeden herhangi bir değeri içerip içermediğini gösterir. Değerler listede bulunursa `true` döndürür, aksi takdirde `false` döndürür.

-   `list`: Aranacak liste.
-   `values`: İlk listede aranacak değerlerin listesi.
-   `equationCriteria`: (İsteğe bağlı) İki değerin eşit olup olmadığını belirlemek için kullanılan karşılaştırıcı.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} listesinin 3 ve 9'u içerip içermediğini belirleyin.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} listesinin 6 ve 7'yi içerip içermediğini belirleyin.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Büyük/küçük harf ayrımını yoksayarak listede bir at ve bir baykuşun bulunup bulunmadığını belirtin.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Listede 8 Nisan 2022 veya 12 Ocak 2021 tarihinin bulunup bulunmadığını belirtin.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
