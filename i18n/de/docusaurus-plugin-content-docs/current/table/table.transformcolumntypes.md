---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Wendet Typtransformationen im Format "\{ column, type \}" unter Verwendung einer bestimmten Kultur an.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Gibt eine Tabelle zurück, indem die Transformationsvorgänge unter Verwendung einer optionalen Kultur auf die angegebenen Spalten angewendet werden.

-   `table`: Die zu transformierende Eingabetabelle.
-   `typeTransformations`: Die anzuwendenden Typtransformationen. Das Format für eine einzelne Transformation ist \{ column name, type value \}. Eine Liste von Transformationen kann verwendet werden, um die Typen von mehreren Spalten gleichzeitig zu ändern. Wenn eine Spalte nicht existiert, wird ein Fehler ausgelöst.
-   `culture`: (Optional) Die Kultur, die beim Transformieren der Spaltentypen verwendet werden soll (z. B. "en-US"). Wenn ein Datensatz für `culture` angegeben wird, kann er die folgenden Felder enthalten:
    -   `Culture`: Die Kultur, die beim Transformieren der Spaltentypen verwendet werden soll (z. B. "en-US").
    -   `MissingField`: Wenn eine Spalte nicht existiert, wird ein Fehler ausgelöst, es sei denn, dieses Feld bietet ein alternatives Verhalten (z. B. `MissingField.UseNull` oder `MissingField.Ignore`).

Der Typwert im Parameter `typeTransformations` kann `any`, alle `number`\-Typen, `text`, alle `date`\-, `time`\-, `datetime`\-, `datetimezone`\- und `duration`\-Typen, `logical` oder `binary` sein. Die Typen `list`, `record`, `table` oder `function` sind für diesen Parameter ungültig.  
  
Für jede in `typeTransformations` aufgelistete Spalte wird normalerweise die Methode „.From“ verwendet, die dem angegebenen Typwert entspricht, um die Transformation durchzuführen. Wenn z. B. ein `Currency.Type` Typwert für eine Spalte angegeben wird, wird die Transformationsfunktion `Currency.From` auf jeden Wert in dieser Spalte angewendet.


## Examples

### Example #1
Transformieren Sie die Zahlenwerte in der ersten Spalte in Textwerte.
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
Transformieren Sie die Datumsangaben in der Tabelle in ihre französischen Textentsprechungen.
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
Transformieren Sie die Datumsangaben in der Tabelle in ihre deutsche Textentsprechung und die Werte in der Tabelle in Prozentsätze.
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
Wenden Sie Transformationen mit einem Datensatzwert für `culture` an.
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
