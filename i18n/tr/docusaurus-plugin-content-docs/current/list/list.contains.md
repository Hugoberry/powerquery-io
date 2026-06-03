---
title: List.Contains
---

# List.Contains


Listenin değeri içerip içermediğini belirtir.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Listenin belirtilen değeri içerip içermediğini gösterir. Değer listede bulunursa `true` döndürür, aksi takdirde `false` döndürür.

-   `list`: Aranacak liste.
-   `value`: Listede aranacak değer.
-   `equationCriteria`: (İsteğe bağlı) İki değerin eşit olup olmadığını belirlemek için kullanılan karşılaştırıcı.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} listesinin 3'ü içerip içermediğini belirleyin.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} listesinin 6'yı içerip içermediğini belirleyin.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Büyük/küçük harf ayrımını yoksayarak, listenin "rhubarb" içerip içermediğini belirleyin.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Listede 8 Nisan 2022 tarihinin bulunup bulunmadığını belirtin.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
