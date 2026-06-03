---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Past met behulp van een specifieke cultuur type transformatie(s) in de notatie \{ column, type \} toe.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Retourneert een tabel door de transformatiebewerkingen toe te passen op de opgegeven kolommen met behulp van een optionele cultuur.

-   `table`: de invoertabel die getransformeerd moet worden.
-   `typeTransformations`: de type-transformaties die moeten worden toegepast. De indeling voor een enkele transformatie is \{ column name, type value \}. Een lijst met transformaties kan worden gebruikt om de typen van meer dan één kolom tegelijk te wijzigen. Als een kolom niet bestaat, wordt er een foutmelding weergegeven.
-   `culture`: (optioneel) de cultuur die moet worden gebruikt bij het transformeren van de kolomtypen (bijvoorbeeld: "en-US"). Als er een record is opgegeven voor `culture`, kan deze de volgende velden bevatten:
    -   `Culture`: de cultuur die moet worden gebruikt bij het transformeren van de kolomtypen (bijvoorbeeld: "en-US").
    -   `MissingField`: als een kolom niet bestaat, wordt een foutmelding weergegeven, tenzij dit veld een alternatief gedrag biedt (bijvoorbeeld `MissingField.UseNull` of `MissingField.Ignore`).

De typewaarde in de parameter `typeTransformations` kan `any`, alle `number` typen, `text`, alle `date`, `time`, `datetime`, `datetimezone`, en `duration` typen, `logical`, of `binary` zijn. De `list`, `record`, `table`, of `function` typen zijn niet geldig voor deze parameter.  
  
Voor elke kolom in `typeTransformations` wordt normaal gesproken de '.From'-methode die overeenkomt met de opgegeven typewaarde gebruikt om de transformatie uit te voeren. Als bijvoorbeeld een `Currency.Type` typewaarde is opgegeven voor een kolom, wordt de transformatiefunctie `Currency.From` toegepast op elke waarde in die kolom.


## Examples

### Example #1
Transformeer de getalwaarden in de eerste kolom naar tekstwaarden.
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
De datums in de tabel transformeren naar de Franse tekstequivalenten.
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
Transformeer de datums in de tabel naar hun Duitse tekstequivalenten en de waarden in de tabel naar percentages.
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
Pas transformaties toe met een recordwaarde voor `culture`.
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
