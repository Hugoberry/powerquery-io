---
title: List.Distinct
---

# List.Distinct


Értékek listáját adja vissza az ismétlődő értékek eltávolításával.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Olyan listát ad vissza, amely a megadott lista összes olyan értékét tartalmazza, amelyből az ismétlődések el lettek távolítva. Ha a megadott lista üres, az eredmény egy üres lista.

-   `list`: Az a lista, amelyből az egyedi értékek kinyerése történik.
-   `equationCriteria`: (Nem kötelező) Meghatározza, hogy az értékek összehasonlításakor hogyan történik az egyenlőség megállapítása. Ez a paraméter lehet kulcsválasztó függvény, összehasonlító függvény, vagy egy lista, amely tartalmazza mind a kulcsválasztót, mind az összehasonlítót.


## Examples

### Example #1
Eltávolítja az ismétlődéseket az \{1, 1, 2, 3, 3, 3\} listából.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
A lista végétől kezdve válassza ki azokat a gyümölcsöket, amelyek egyedi szöveghosszúsággal rendelkeznek.
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
A lista elejétől kezdve, a kis- és nagybetűk figyelmen kívül hagyásával válassza ki az egyedi gyümölcsöket.
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
A kis- és nagybetűk figyelmen kívül hagyásával nyerje ki a listák közül az első, egyedi országnevekkel rendelkező listákat. Helyezze a kinyert listákat egy új tábla soraiba.
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
