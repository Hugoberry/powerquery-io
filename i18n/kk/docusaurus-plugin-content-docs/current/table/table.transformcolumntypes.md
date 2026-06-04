---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Белгілі бір мәдениетті пайдаланып, \{ column, type \} түріндегі түр түрлендіру(лер)ін қолданады.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Қосымша тіл стандартын пайдаланып, көрсетілген бағандарға түрлендіру әрекеттерін қолдану арқылы кестені қайтарады.

-   `table`: Түрлендірілетін кіріс кестесі.
-   `typeTransformations`: Қолданылатын түр түрлендірулері. Жеке түрлендіру пішімі: \{ column name, type value \}. Түрлендірулер тізімін бір уақытта бірнеше баған түрлерін өзгерту үшін пайдалануға болады. Егер баған жоқ болса, қате пайда болады.
-   `culture`: (Міндетті емес) Баған түрлерін түрлендіру кезінде пайдаланылатын тіл стандарты (мысалы, "en-US"). Егер жазба `culture` үшін көрсетілсе, ол келесі өрістерді қамтуы мүмкін:
    -   `Тіл стандарты`: Баған түрлерін түрлендіру кезінде пайдаланылатын мәдениет (мысалы, "en-US").
    -   `MissingField`: Егер баған болмаса, бұл өріс балама әрекетті (мысалы, `MissingField.UseNull` не `MissingField.Ignore`) ұсынбаса, қате шығады.

`typeTransformations` параметріндегі түр мәні `кез келген`, барлық `сан` түрлері, `мәтін`, барлық `күн`, `уақыт`, `күн/уақыт`, `күн/уақыт белдеуі` және `ұзақтық` түрлері, `логикалық` не `екілік` болуы мүмкін. Бұл параметр үшін `тізім`, `жазба`, `кесте` не `функция` түрлері жарамсыз.  
  
`typeTransformations` тармағында тізімделген әрбір баған үшін түрлендіруді орындау үшін әдетте көрсетілген түр мәніне сәйкес келетін ".From" әдісі пайдаланылады. Мысалы, бағанда `Currency.Type` түріндегі мән болса, `Currency.From` түрлендіру функциясы сол бағандағы әрбір мәнге қолданылады.


## Examples

### Example #1
Бірінші бағандағы сандық мәндерді мәтіндік мәндерге түрлендіріңіз.
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
Кестедегі күндерді олардың француз мәтіндік баламаларына түрлендіріңіз.
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
Кестедегі күндерді олардың неміс мәтіндік баламаларына, ал кестедегі мәндерді пайызға түрлендіріңіз.
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
`culture` үшін жазба мәні бар түрлендірулерді қолданыңыз.
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
