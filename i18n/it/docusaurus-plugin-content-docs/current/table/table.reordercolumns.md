---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Restituisce una tabella con colonne nell&#39;ordine specificato.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Restituisce una tabella dall'input <code>table</code>, con le colonne nell'ordine specificato da <code>columnOrder</code>. Le colonne non specificate nell'elenco non verranno riordinate.     Se la colonna non esiste, verrà generata un'eccezione a meno che il parametro facoltativo <code>missingField</code> non specifichi un'alternativa, ad esempio <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>.


## Examples

### Example #1 
Scambiare l&#39;ordine delle colonne [Phone] e [Name] nella tabella.
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
Scambiare l&#39;ordine delle colonne [Phone] e [Address] o usa &#34;MissingField.Ignore&#34;. Non modifica la tabella perché la colonna [Address] non esiste.
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
