---
title: List.Distinct
---

# List.Distinct


Vrne seznam vrednosti, iz katerega so odstranjeni dvojniki.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrne seznam, ki vsebuje vse vrednosti na navedenem seznamu, pri čemer so dvojniki odstranjeni. Če je navedeni seznam prazen, je rezultat prazen seznam.

-   `list`: seznam, iz katerega so izvlečene edinstvene vrednosti.
-   `equationCriteria`: (izbirno) Določa način ugotavljanja enakosti pri primerjanju vrednosti. Ta parameter je lahko funkcija izbirnika ključa, funkcija za primerjanje ali seznam, ki vsebuje tako funkcijo izbirnika ključa kot funkcijo za primerjanje.


## Examples

### Example #1
Odstranite dvojnike iz seznama \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Začnite na koncu seznama in izberite sadeže, ki imajo edinstveno dolžino besedila.
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
Začnite na začetku seznama in izberite edinstvene sadeže, pri tem pa prezrite velike in male črke.
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
Izvlecite iz seznama seznamov prve sezname z edinstvenimi imeni držav, pri tem pa prezrite velike in male črke. Vstavite izvlečene sezname v vrstice nove tabele.
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
