---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Tillämpar typtransformeringar i formatet \{ column, type \} med hjälp av en specifik kultur.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Returnerar en tabell genom att tillämpa transformeringsåtgärderna på de angivna kolumnerna med hjälp av en valfri kultur.

-   `table`: Indatatabellen som ska transformeras.
-   `typeTransformations`: Typtransformeringar som ska tillämpas. Formatet för en enskild transformering är \{ column name, type value \}. En lista över transformeringar kan användas för att ändra typerna för mer än en kolumn i taget. Om det inte finns någon kolumn utlöses ett fel.
-   `culture`: (Valfritt) Kulturen som ska användas när kolumntyperna transformeras (till exempel "en-US"). Om en post har angetts för `culture` kan den innehålla följande fält:
    -   `Kultur`: Kulturen som ska användas när kolumntyperna transformeras (till exempel "en-US").
    -   `MissingField`: Om det inte finns någon kolumn utlöses ett fel om inte det här fältet ger ett alternativt beteende (till exempel `MissingField.UseNull` eller `MissingField.Ignore`).

Typvärdet i parametern `typeTransformations` kan vara `any`, alla typer av `number`, `text`, all `date`, `time`, `datetime`, `datetimezone` och `duration` typer, `logical` eller `binary`. Typerna `list`, `record`, `table` eller `function` är inte giltiga för den här parametern.  
  
För varje kolumn som anges i `typeTransformations` används normalt. From-metoden som motsvarar det angivna typvärdet för att utföra transformeringen. Till exempel, om ett `Currency.Type`\-typvärde anges för en kolumn, tillämpas transformeringsfunktionen `Currency.From` på varje värde i den kolumnen.


## Examples

### Example #1
Omvandla talvärdena i den första kolumnen till textvärden.
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
Omvandla datumen i tabellen till motsvarande franska text.
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
Omvandla datumen i tabellen till motsvarande tyska text och värdena i tabellen till procenttal.
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
Tillämpa transformeringar med ett postvärde för `kultur`.
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
