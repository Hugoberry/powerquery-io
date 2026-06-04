---
title: List.Distinct
---

# List.Distinct


Vrátí seznam hodnot s odebranými duplicitními hodnotami.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrátí seznam všech hodnot v zadaném seznamu s odebranými duplicitními položkami. Pokud je zadaný seznam prázdný, výsledkem je prázdný seznam.

 -   `list`: Seznam, ze kterého jsou extrahovány jedinečné hodnoty.
-   `equationCriteria`: (Volitelné) Definuje, jak se určuje rovnost při porovnávání položek. Tento parametr může být funkcí pro výběr klíče, funkcí pro porovnání, nebo seznamem obsahujícím obě funkce.


## Examples

### Example #1
Odebere duplicitní hodnoty ze seznamu \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Od konce seznamu vyberte ovoce s jedinečnou délkou názvu.
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
Od začátku seznamu vyberte jedinečné ovoce bez ohledu na velikost písmen.
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
Ze seznamu seznamů vyberte první seznamy s jedinečnými názvy zemí bez ohledu na velikost písmen. Extrahované seznamy umístěte do řádků nové tabulky.
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
