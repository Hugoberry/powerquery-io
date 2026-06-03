---
title: Table.RenameColumns
---

# Table.RenameColumns


Applica le ridenominazioni nel formato \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Esegue le ridenominazioni specificate nelle colonne della tabella `table`. L'operazione di sostituzione `renames` è costituta da un elenco di due valori, il vecchio e il nuovo nome di colonna. Se la colonna non esiste, verrà generato un errore a meno che il parametro facoltativo `missingField` non specifichi un'alternativa, ad esempio `MissingField.UseNull` o `MissingField.Ignore`.


## Examples

### Example #1
Sostituire il nome della colonna "CustomerNum" con "CustomerID" nella tabella.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Sostituire il nome della colonna "CustomerNum" con "CustomerID" e il nome della colonna "PhoneNum" con "Phone" nella tabella.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Sostituire il nome della colonna "NewCol" con "NewColumn" e ignorare l'operazione se la colonna non esiste.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
