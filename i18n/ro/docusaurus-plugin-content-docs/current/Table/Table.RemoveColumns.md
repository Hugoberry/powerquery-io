---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Elimină coloanele specificate.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Elimină <code>columns</code> specificate din <code>table</code> furnizate. Dacă coloana specificată nu există, se declanșează o eroare dacă parametrul opțional <code>missingField</code> specifică un comportament alternativ (de exemplu, <code>MissingField.UseNull</code> sau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Eliminați coloana [Telefon] din tabel.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Încercați să eliminați o coloană inexistentă din tabel.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
