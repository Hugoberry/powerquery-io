---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplica la transformación de tipo del formato \{ column, type \} con una referencia cultural específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Devuelve una tabla aplicando las operaciones de transformación a las columnas especificadas mediante una referencia cultural opcional.

-   `table`: la tabla de entrada que se va a transformar.
-   `typeTransformations`: la transformaciones de tipo que se van a aplicar. El formato de una sola transformación es \{ column name, type value \}. Se puede usar una lista de transformaciones para cambiar los tipos de más de una columna a la vez. Si no existe una columna, se produce un error.
-   `culture`: (Opcional) La referencia cultural que se va a usar al transformar los tipos de columna (por ejemplo, "en-US"). Si se especifica un registro para `culture`, puede contener los siguientes campos:
    -   `Culture`: referencia cultural que se va a usar al transformar los tipos de columna (por ejemplo, "en-US").
    -   `MissingField`: si no existe una columna, se produce un error a menos que este campo proporcione un comportamiento alternativo (por ejemplo, `MissingField.UseNull` o `MissingField.Ignore`).

El valor de tipo del parámetro `typeTransformations` puede ser `any`, todos los tipos `number`, `text`, todos los `date`, `time`, `datetime`, `datetimezone` y tipos `duration`, `logical` o `binary`. Los tipos `list`, `record`, `table` o `function` no son válidos para este parámetro.  
  
Para cada columna enumerada en `typeTransformations`, el método ".From" correspondiente al valor de tipo especificado para realizar la transformación. Por ejemplo, si se proporciona un valor de tipo `Currency.Type` para una columna, la función de transformación `Currency.From` se aplica a cada valor de esa columna.


## Examples

### Example #1
Transforme los valores numéricos de la primera columna en valores de texto.
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
Transforma las fechas de la tabla en sus equivalentes de texto en francés.
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
Transforma las fechas de la tabla en sus equivalentes de texto en alemán y los valores de la tabla en porcentajes.
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
Aplique transformaciones con un valor de registro para `culture`.
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
