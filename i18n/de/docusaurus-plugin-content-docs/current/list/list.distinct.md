---
title: List.Distinct
---

# List.Distinct


Gibt eine Liste mit Werten ohne Duplikate zurück.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Gibt eine Liste zurück, die alle Werte in der angegebenen Liste enthält, wobei Duplikate entfernt wurden. Wenn die angegebene Liste leer ist, ist das Ergebnis eine leere Liste.

-   `list`: Die Liste, aus der unterschiedliche Werte extrahiert werden.
-   `equationCriteria`: (Optional) Gibt an, wie die Gleichheit beim Vergleichen von Werten bestimmt wird. Dieser Parameter kann eine Schlüsselauswahlfunktion, eine Vergleichsfunktion oder eine Liste sein, die sowohl eine Schlüsselauswahl als auch eine Vergleichsfunktion enthält.


## Examples

### Example #1
Entfernt die Duplikate aus der Liste "\{1, 1, 2, 3, 3, 3\}".
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Wähle ab dem Ende der Liste die Früchte aus, die eine einzigartige Textlänge haben.
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
Wähle ab dem Anfang der Liste die einzigartigen Früchte aus, wobei die Groß- und Kleinschreibung ignoriert wird.
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
Extrahiere aus einer Liste von Listen die ersten Listen mit einzigartigen Ländernamen, wobei die Groß- und Kleinschreibung ignoriert wird. Platziere die extrahierten Listen in den Zeilen einer neuen Tabelle.
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
