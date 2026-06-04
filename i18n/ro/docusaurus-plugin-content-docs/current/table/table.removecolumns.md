---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Elimină coloanele specificate.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Elimină `columns` specificate din `table` furnizate. Dacă coloana specificată nu există, se declanșează o eroare dacă parametrul opțional `missingField` specifică un comportament alternativ (de exemplu, `MissingField.UseNull` sau `MissingField.Ignore`).


## Examples

### Example #1
Eliminați coloana \[Telefon\] din tabel.
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
