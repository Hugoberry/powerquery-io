---
title: List.PositionOf
---

# List.PositionOf


Bir listedeki bir değerin uzaklıklarını döndürür.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Belirtilen değerin bir listede göründüğü ofseti döndürür. Değer görünmüyorsa -1 döndürür.

-   `list`: Aranacak liste.
-   `value`: Listede bulunacak değer.
-   `occurrence`: (İsteğe bağlı) Raporlanacak belirli olay. Bu değer `Occurrence.First`, `Occurrence.Last` veya `Occurrence.All` olabilir. `occurrence` belirtilmezse, `Occurrence.First` kullanılır.
-   `equationCriteria`: (İsteğe bağlı) Değerler karşılaştırılırken eşitliğin nasıl belirleneceğini belirtir. Bu parametre bir anahtar seçici işlev, bir karşılaştırıcı işlev veya hem anahtar seçici hem de karşılaştırıcı içeren bir liste olabilir.


## Examples

### Example #1
\{1, 2, 3\} listesinde 3 değerinin göründüğü konumu bulur.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
2022 tarihinden itibaren tüm tarihlerin listesinde konumu bulun.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Büyük/küçük harfleri dikkate almadan, "dog" kelimesinin son geçtiği yerin konumunu listede bulun.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
Listede 28 sayısından iki birim uzaklıkta olan konumu bulun.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
