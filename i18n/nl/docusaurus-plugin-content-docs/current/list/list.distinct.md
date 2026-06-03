---
title: List.Distinct
---

# List.Distinct


Retourneert een lijst met de waarden waarin dubbele waarden zijn verwijderd.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourneert een lijst met alle waarden in de opgegeven lijst, waarbij duplicaten zijn verwijderd. Als de opgegeven lijst leeg is, is het resultaat een lege lijst.

-   `list`: De lijst waaruit afzonderlijke waarden worden geëxtraheerd.
-   `equationCriteria`: (Optioneel) Geeft aan hoe gelijkheid wordt bepaald bij het vergelijken van waarden. Deze parameter kan een sleutelkiezerfunctie, een vergelijkingsfunctie of een lijst met zowel een sleutelkiezer als een vergelijker zijn.


## Examples

### Example #1
De dubbele waarden verwijderen uit de lijst \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Selecteer vanaf het einde van de lijst de fruitsoorten met een unieke tekstlengte.
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
Selecteer vanaf het begin van de lijst de unieke fruitsoorten terwijl je de hoofdlettergevoeligheid negeert.
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
Extraheer uit een lijst met lijsten de eerste lijsten met unieke landnamen terwijl je de hoofdlettergevoeligheid negeert. Plaats de geëxtraheerde lijsten in de rijen van een nieuwe tabel.
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
