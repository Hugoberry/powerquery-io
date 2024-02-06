---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Restituisce una tabella con solo le righe della tabella di input che contengono un errore in almeno una delle celle. Se viene specificato un elenco di colonne, la ricerca degli errori verrà eseguita solo nelle celle delle colonne specificate.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Restituisce una tabella con solo le righe della tabella di input che contengono un errore in almeno una delle celle. Se viene specificato un elenco di colonne, la ricerca degli errori verrà eseguita solo nelle celle delle colonne specificate.


## Examples

### Example #1 
Selezionare i nomi dei clienti che contengono errori nelle rispettive righe.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
