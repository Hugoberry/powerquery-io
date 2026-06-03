---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Applica le trasformazioni del tipo nel formato \{ column, type \} utilizzando impostazioni cultura specifiche.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Restituisce una tabella applicando le operazioni di trasformazione alle colonne specificate tramite impostazioni cultura facoltative.

-   `table`: tabella di input da trasformare.
-   `typeTransformations`: trasformazioni del tipo da applicare. Il formato per una singola trasformazione è \{ column name, type value \}. È possibile utilizzare un elenco di trasformazioni per modificare i tipi di più colonne contemporaneamente. Se una colonna non esiste, viene generato un errore.
-   `culture`: (opzione facoltativa) impostazioni cultura da utilizzare quando si trasformano i tipi di colonne (ad esempio, "en-US"). Se viene specificato un record per `culture`, può contenere i seguenti campi:
    -   `Culture`: impostazioni cultura da utilizzare durante la trasformazione dei tipi di colonne (ad esempio, "en-US").
    -   `MissingField`: se una colonna non esiste, viene generato un errore a meno che questo campo non fornisca un comportamento alternativo (ad esempio, `MissingField.UseNull` o `MissingField.Ignore`).

Il valore del tipo nel parametro `typeTransformations` può essere: `any`, qualsiasi tipo `number`, `text`, qualsiasi tipo `date`, `time`, `datetime`, `datetimezone` e `duration`, `logical` o `binary`. I tipi `list`, `record`, `table` e `function` non sono validi per questo parametro.  
  
Per ogni colonna elencata in `typeTransformations`, il metodo ".From" corrispondente al valore del tipo specificato viene in genere utilizzato per eseguire la trasformazione. Ad esempio, se viene fornito un valore di tipo `Currency.Type` per una colonna, la funzione di trasformazione `Currency.From` viene applicata a ogni valore in quella colonna.


## Examples

### Example #1
Trasformare i valori numerici nella prima colonna in valori di testo.
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
Trasforma le date nella tabella in equivalenti di testo in francese.
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
Trasforma le date della tabella nei rispettivi equivalenti di testo tedesco e i valori della tabella in percentuali.
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
Applica trasformazioni con un valore di registrazione per `culture`.
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
