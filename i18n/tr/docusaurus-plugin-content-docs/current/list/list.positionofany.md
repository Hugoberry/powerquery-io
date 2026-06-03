---
title: List.PositionOfAny
---

# List.PositionOfAny


Bir listedeki bir değerin ilk uzaklığını döndürür.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Belirtilen değerler listesinden bir öğenin listede göründüğü ofseti döndürür. Hiçbir eşleşme bulunmazsa -1 değerini döndürür.

-   `list`: Aranacak liste.
-   `values`: Orijinal listede bulunacak değerlerin listesi.
-   `occurrence`: (İsteğe bağlı) Raporlanacak belirli olay. Bu değer `Occurrence.First`, `Occurrence.Last` veya `Occurrence.All` olabilir. `occurrence` belirtilmezse, `Occurrence.First` kullanılır.
-   `equationCriteria`: (İsteğe bağlı) Değerler karşılaştırılırken eşitliğin nasıl belirleneceğini belirtir. Bu parametre bir anahtar seçici işlev, bir karşılaştırıcı işlev veya hem anahtar seçici hem de karşılaştırıcı içeren bir liste olabilir.


## Examples

### Example #1
\{1, 2, 3\} listesinde 2 veya 3 değerinin göründüğü ilk konumu bulur.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
2022 veya 2023 tarihlerinin tüm örneklerinin listesindeki konumu bulun.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Büyük/küçük harf farkını göz ardı ederek, listede dog veya cat kelimesinin son geçtiği yeri bulun.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Listede 17 veya 28 sayısından iki birim uzaklıkta olan herhangi bir pozisyonu bulun.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
