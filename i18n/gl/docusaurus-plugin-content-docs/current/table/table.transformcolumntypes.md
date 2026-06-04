---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplica transformación(s) de tipo da forma \{ column, type \} usando unha referencia cultural específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Devolve unha táboa aplicando as operacións de transformación ás columnas especificadas usando unha cultura opcional.

-   `table` : A táboa de entrada a transformar.
-   `typeTransformations` : As transformacións de tipo que se aplicarán. O formato para unha única transformación é \{ column name, type value \}. Pódese usar unha lista de transformacións para cambiar os tipos de máis dunha columna á vez. Se unha columna non existe, xorde un erro.
-   `culture` : (Opcional) A cultura que se vai usar ao transformar os tipos de columna (por exemplo, "gl-ES"). Se se especifica un rexistro para `culture`, pode conter os seguintes campos:
    -   `Cultura`: A cultura que se vai usar ao transformar os tipos de columna (por exemplo, "en-US").
    -   `MissingField`: Se unha columna non existe, prodúcese un erro a menos que este campo proporcione un comportamento alternativo (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).

O valor do tipo no parámetro `typeTransformations` pode ser `any`, todos os tipos `number`, `text`, todos os tipos `date`, `time`, `datetime`, `datetimezone` e `duration`, `logical` ou `binary`. Os tipos `list`, `record`, `table` ou `function` non son válidos para este parámetro.  
  
Para cada columna listada en `typeTransformations`, o método ".From" correspondente ao valor de tipo especificado úsase normalmente para realizar a transformación. Por exemplo, se se proporciona un valor de tipo `Currency.Type` para unha columna, a función de transformación `Currency.From` aplícase a cada valor desa columna.


## Examples

### Example #1
Transformación dos valores numéricos da primeira columna a valores de texto.
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
Transformar as datas da táboa aos seus equivalentes de texto francés.
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
Transformación das datas da táboa aos seus equivalentes de texto alemán, e os valores da táboa a porcentaxes.
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
Aplicar transformacións cun valor de rexistro para `culture`.
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
