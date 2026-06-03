---
title: Table.SelectColumns
---

# Table.SelectColumns


Restituisce una tabella contenente solo le colonne specificate.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Restituisce il `table` con solo il `columns`.

-   `table`: La tabella fornita.
-   `columns`: l'elenco di colonne della tabella `table` da restituire. Le colonne nella tabella restituita sono nell'ordine elencato in `columns`.
-   `missingField`: *(Facoltativo)* Cosa fare se la colonna non esiste. Esempio: `MissingField.UseNull` o `MissingField.Ignore`.


## Examples

### Example #1
Includere solo la colonna \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
Includere solo le colonne \[CustomerID\] e \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
Se la colonna inclusa non esiste, il risultato predefinito sarà un errore.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
Se la colonna inclusa non esiste, l'opzione `MissingField.UseNull` crea una colonna di valori Null.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
