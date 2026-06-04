---
title: List.Distinct
---

# List.Distinct


Vráti zoznam hodnôt s odstránenými duplikátmi.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vráti zoznam obsahujúci všetky hodnoty v zadanom zozname s odstránenými duplikátmi. Ak je zadaný zoznam prázdny, výsledkom je prázdny zoznam.

-   `list`Zoznam, z ktorého sa extrahujú jedinečné hodnoty.
-   `equationCriteria`: (Voliteľné) Určuje, ako sa určuje rovnosť pri porovnávaní hodnôt. Tento parameter môže byť funkcia selektora kľúčov, funkcia porovnávača alebo zoznam obsahujúci obe funkcie.


## Examples

### Example #1
Odstráňte duplikáty zo zoznamu \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Od konca zoznamu vyberte ovocie s jedinečnou dĺžkou textu.
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
Od začiatku zoznamu vyberte jedinečné ovocia bez ohľadu na veľkosť písmen.
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
Zo zoznamu zoznamov extrahujte prvé zoznamy s jedinečnými názvami krajín bez ohľadu na veľkosť písmen. Umiestnite extrahované zoznamy do riadkov novej tabuľky.
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
