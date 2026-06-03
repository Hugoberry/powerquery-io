---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Restituisce una tabella con colonne nell'ordine specificato.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Restituisce una tabella dall'input `table`, con le colonne nell'ordine specificato da `columnOrder`. Le colonne non specificate nell'elenco non verranno riordinate. Se la colonna non esiste, verrà generato un errore a meno che il parametro facoltativo `missingField` non specifichi un'alternativa, ad esempio `MissingField.UseNull` o `MissingField.Ignore`.


## Examples

### Example #1
Scambiare l'ordine delle colonne \[Phone\] e \[Name\] nella tabella.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Scambiare l'ordine delle colonne \[Phone\] e \[Address\] o usa "MissingField.Ignore". Non modifica la tabella perché la colonna \[Address\] non esiste.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
