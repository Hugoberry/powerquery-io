---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplica transformações de tipo com o formato \{ column, type \} utilizando uma cultura específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Devolve uma tabela ao aplicar as operações de transformação às colunas especificadas com uma cultura opcional.

-   `table`: a tabela de entrada a transformar.
-   `typeTransformations`: as transformações de tipo a aplicar. O formato de uma única transformação é \{ column name, type value \}. Poderá ser utilizada uma lista de transformações para alterar os tipos de mais de uma coluna de cada vez. Se uma coluna não existir, é gerado um erro.
-   `culture`: (opcional) a cultura a utilizar ao transformar os tipos de coluna (por exemplo, "en-US"). Se for especificado um registo para `culture`, este poderá conter os campos seguintes:
    -   `Culture`: a cultura a utilizar ao transformar os tipos de coluna (por exemplo, "en-US").
    -   `MissingField`: se uma coluna não existir, é gerado um erro, exceto se este campo fornecer um comportamento alternativo (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).

O valor de tipo no parâmetro `typeTransformations` pode ser `any`, todos os tipos `number`, `text`, todos os tipos `date`, `time`, `datetime`, `datetimezone` e `duration`, `logical` ou `binary`. Os tipos `list`, `record`, `table` ou `function` não são válidos para este parâmetro.  
  
Para cada coluna indicada em `typeTransformations`, o método ".From" correspondente ao valor de tipo especificado é normalmente utilizado para efetuar a transformação. Por exemplo, se for indicado um valor de tipo `Currency.Type` para uma coluna, a função de transformação `Currency.From` será aplicada a cada valor dessa coluna.


## Examples

### Example #1
Transforme os valores numéricos na primeira coluna em valores de texto.
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
Transforme as datas na tabela para os respetivos equivalentes de texto francês.
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
Transforme as datas na tabela para os equivalentes de texto alemão e os valores na tabela em percentagens.
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
Aplique transformações com um valor de registo para `culture`.
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
