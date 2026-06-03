---
title: List.Distinct
---

# List.Distinct


Yinelenen değerleri kaldırılmış bir değer listesi döndürür.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Belirtilen listedeki tüm değerleri, kopyaları kaldırılmış olarak içeren bir liste döndürür. Belirtilen liste boşsa, sonuç boş bir liste olur.

-   `list`: Farklı değerlerin ayıklandığı liste.
-   `equationCriteria`: (İsteğe bağlı) Değerler karşılaştırılırken eşitliğin nasıl belirleneceğini belirtir. Bu parametre bir anahtar seçici işlev, bir karşılaştırıcı işlev veya hem anahtar seçici hem de karşılaştırıcı içeren bir liste olabilir.


## Examples

### Example #1
\{1, 1, 2, 3, 3, 3\} listesinden yinelenen değerleri kaldırır.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Listenin sonundan başlayarak, benzersiz metin uzunluğuna sahip meyveleri seçin.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
Listenin başından başlayarak, büyük/küçük harf farkını göz ardı ederek benzersiz meyveleri seçin.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Bir liste listesinden, büyük/küçük harfleri yok sayarak benzersiz ülke adlarına sahip ilk listeleri çıkarır. Çıkarılan listeleri yeni bir tablonun satırlarına yerleştirin.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
