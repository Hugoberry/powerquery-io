---
title: List.Distinct
---

# List.Distinct


Returnerer en liste over værdier, hvor dublerede værdier er fjernet.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerer en liste, der indeholder alle værdierne på den angivne liste, hvor dubletter er fjernet. Hvis den angivne liste er tom, er resultatet en tom liste.

-   `list`: Den liste, som entydige værdier udtrækkes fra.
-   `equationCriteria`: (Valgfrit) Angiver, hvordan lighed bestemmes, når værdier sammenlignes. Denne parameter kan være en nøglevælgerfunktion, en sammenligningsfunktion eller en liste, der indeholder både en nøglevælger og en sammenligningsfunktion.


## Examples

### Example #1
Fjern de dublerede værdier fra listen \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Start fra slutningen af listen, og vælg de frugter, der har en unik tekstlængde.
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
Start fra starten af listen, og vælg de entydige frugter, mens du ignorerer store og små bogstaver.
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
Udtræk fra en liste over lister over – de første lister med entydige landenavne, mens du ignorerer store og små bogstaver. Placer de udpakkede lister i rækkerne i en ny tabel.
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
