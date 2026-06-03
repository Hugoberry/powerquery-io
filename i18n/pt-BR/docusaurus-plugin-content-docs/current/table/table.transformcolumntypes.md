---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplica transformações de tipo no formato \{ column, type \} usando uma cultura específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Retorna uma tabela aplicando as operações de transformação às colunas especificadas usando uma cultura opcional.

-   `table`: A tabela de entrada a ser transformada.
-   `typeTransformations`: as transformações de tipo a serem aplicadas. O formato para uma única transformação é \{ column name, type value \}. Uma lista de transformações pode ser usada para alterar os tipos de mais de uma coluna por vez. Se uma coluna não existir, um erro será gerado.
-   `culture`: (Opcional) A cultura a ser usada ao transformar os tipos de coluna (por exemplo, "en-US"). Se um registro for especificado para `culture`, ele poderá conter os seguintes campos:
    -   `Culture`: A cultura a ser usada ao transformar os tipos de coluna (por exemplo, "en-US").
    -   `MissingField`: se uma coluna não existir, um erro será gerado, a menos que esse campo forneça um comportamento alternativo (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).

O valor de tipo no parâmetro `typeTransformations` pode ser `any`, todos os tipos `number`, `text`, todo o `date`, `time`, `datetime`, `datetimezone` e `duration`, `logical` ou `binary`. Os tipos `list`, `record`, `table` ou `function` não são válidos para este parâmetro.  
  
Para cada coluna listada em `typeTransformations`, o método ".From" correspondente ao valor de tipo especificado normalmente é usado para executar a transformação. Por exemplo, se um valor de tipo `Currency.Type` for fornecido para uma coluna, a função de transformação `Currency.From` será aplicada a cada valor nessa coluna.


## Examples

### Example #1
Transforme os valores numéricos na primeira coluna em valores de texto.
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
Transforme as datas na tabela em seus equivalentes de texto em francês.
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
Transforme as datas na tabela em seus equivalentes de texto em alemão e os valores na tabela em porcentões.
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
Aplique transformações com um valor de registro para `culture`.
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
