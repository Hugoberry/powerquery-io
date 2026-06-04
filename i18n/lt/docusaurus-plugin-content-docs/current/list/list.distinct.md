---
title: List.Distinct
---

# List.Distinct


Pateikiamas reikšmių sąrašas su pašalintais pasikartojimais.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Pateikia sąrašą, kuriame yra visos nurodyto sąrašo reikšmės su pašalintais dublikatais. Jei nurodytas sąrašas tuščias, rezultatas bus tuščias sąrašas.

-   `list`: sąrašas, iš kurio gaunamos skirtingos reikšmės.
-   `equationCriteria`: (pasirinktinai) nurodo, kaip nustatoma lygybė lyginant reikšmes. Šis parametras gali būti klavišų pasirinkimo funkcija, lyginimo funkcija arba sąrašas, kuriame yra tiek klavišų pasirinkimo funkcija, tiek lyginimo funkcija.


## Examples

### Example #1
Pašalinkite iš sąrašo pasikartojimus \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Pradedant nuo sąrašo pabaigos, pasirinkite vaisius, kurių teksto ilgis yra unikalus.
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
Pradedant nuo sąrašo pradžios, pasirinkite unikalius vaisius, nepaisydami didžiųjų ir mažųjų raidžių.
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
Iš sąrašų sąrašo išskleiskite pirmuosius sąrašus su unikaliais šalių pavadinimais, nepaisydami didžiųjų ir mažųjų raidžių. Išskleistus sąrašus įdėkite į naujos lentelės eilutes.
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
