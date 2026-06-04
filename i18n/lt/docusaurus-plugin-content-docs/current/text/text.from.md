---
title: Text.From
---

# Text.From


Iš nurodytos reikšmės sukuriama tekstinė reikšmė.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Pateikiama nurodytos reikšmės tekstinė pateiktis.

-   `value`: reikšmė, kurią reikia konvertuoti į tekstą. Reikšmė gali būti `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` arba `binary` reikšmė. Jei nurodyta reikšmė yra `null`, ši funkcija pateikia `null`.
-   `culture`: (pasirinktinai) kultūra, naudojama transformuojant reikšmę (pvz., „en-US“).


## Examples

### Example #1
Sukurkite tekstinę reikšmę iš skaičiaus 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Gaukite nurodytos datos ir laiko teksto ekvivalentą.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Gaukite nurodytos datos ir laiko Vokiečių kalbos teksto ekvivalentą.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Gaukite dvejetainę reikšmę iš teksto, užkoduoto kaip šešioliktainis, ir pakeiskite reikšmę į tekstą.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Gaukite eilutes lentelėje, kurioje yra Prancūzijos duomenys, ir konvertuokite datas į tekstą naudodami Prancūzų kultūrą.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
