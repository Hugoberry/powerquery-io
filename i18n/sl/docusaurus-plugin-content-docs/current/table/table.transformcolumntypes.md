---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Uporabi pretvorbe vrste v obliki \{ column, type \} z določeno kulturo.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Vrne tabelo z uporabo operacij preoblikovanja za določene stolpce z izbirno kulturo.

-   `table`: Vhodna tabela za preoblikovanje.
-   `typeTransformations`: Transformacije vrste, ki bodo uporabljene. Oblika za eno transformacijo je \{ column name, type value \}. Seznam transformacij se lahko uporabi za spremembo tipov več stolpcev hkrati. Če stolpec ne obstaja, se opozori na napako.
-   `culture`(Izbirno) Kultura, ki jo želite uporabiti pri transformaciji tipov stolpcev (na primer"en-US"). Če je zapis določen za `culture`, lahko vsebuje ta polja:
    -   `Culture`: Kultura, ki se uporablja pri pretvarjanju tipov stolpcev (na primer "en-US").
    -   `MissingField`: Če stolpec ne obstaja, se opozori na napako, razen če to polje zagotavlja nadomestno vedenje (na primer `MissingField.UseNull` ali `MissingField.Ignore`).

Vrednost tipa v parametru `typeTransformations` je lahko `any`, kateri koli od tipov `number`, `text`, kateri koli od tipov `date`, `time`, `datetime`, `datetimezone`, `duration`, `logical` ali `binary`. Tipi `list`, `record`, `table` ali `function` niso veljavni za ta parameter.  
  
Za vsak stolpec, ki je naveden v `typeTransformations`, se za izvedbo pretvorbe običajno uporabi metoda".From", ki ustreza določeni vrednosti tipa. Če je na primer za stolpec navedena vrednost vrste `Currency.Type`, bo funkcija pretvorbe `Currency.From` uporabljena za vsako vrednost v tem stolpcu.


## Examples

### Example #1
Pretvorite številske vrednosti v prvem stolpcu v besedilne vrednosti.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
Pretvorite datume v tabeli v njihove ekvivalente besedila v francoščini.
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
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
Pretvorite datume v tabeli v njihove nemške besedilne ekvivalente in vrednosti v tabeli v odstotke.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
Uporabi pretvorbe z vrednostjo zapisa za `culture`.
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
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
