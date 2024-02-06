---
title: Table.RenameColumns
---

# Table.RenameColumns


Applica le ridenominazioni nel formato \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Esegue le ridenominazioni specificate nelle colonne della tabella <code>table</code>. L'operazione di sostituzione <code>renames</code> è costituta da un elenco di due valori, il vecchio e il nuovo nome di colonna.    Se la colonna non esiste, verrà generata un'eccezione a meno che il parametro facoltativo <code>missingField</code> non specifichi un'alternativa, ad esempio <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>.


## Examples

### Example #1 
Sostituire il nome della colonna &#34;CustomerNum&#34; con &#34;CustomerID&#34; nella tabella.
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
Sostituire il nome della colonna &#34;CustomerNum&#34; con &#34;CustomerID&#34; e il nome della colonna &#34;PhoneNum&#34; con &#34;Phone&#34; nella tabella.
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
Sostituire il nome della colonna &#34;NewCol&#34; con &#34;NewColumn&#34; e ignorare l&#39;operazione se la colonna non esiste.
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
