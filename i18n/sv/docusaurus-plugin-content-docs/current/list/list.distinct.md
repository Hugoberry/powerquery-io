---
title: List.Distinct
---

# List.Distinct


Returnerar en lista med värden med borttagna dubbletter.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerar en lista som innehåller alla värden i den angivna listan med dubbletter borttagna. Om den angivna listan är tom är resultatet en tom lista.

-   `list`: Listan som distinkta värden extraheras från.
-   `equationCriteria`: (Valfritt) Anger hur likhet bestäms när värden jämförs. Den här parametern kan vara en nyckelväljare, en jämförelsefunktion eller en lista som innehåller både en nyckelväljare och en jämförelsefunktion.


## Examples

### Example #1
Ta bort dubbletter från listan \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Från och med slutet av listan väljer du de frukter som har en unik textlängd.
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
Från och med början av listan väljer du den unika frukten samtidigt som skiftläge ignoreras.
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
Extrahera från en lista med listor över de första listorna med unika landsnamn samtidigt som skiftläge ignoreras. Placera de extraherade listorna i raderna i en ny tabell.
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
