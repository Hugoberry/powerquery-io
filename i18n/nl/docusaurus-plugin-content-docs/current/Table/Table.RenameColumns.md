---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Past naamswijzigingen toe in de vorm \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Voert de opgegeven naamswijzigingen door in de kolommen in tabel <code>table</code>. Een vervanging <code>renames</code> bestaat uit een lijst met twee waarden, de oude kolomnaam en de nieuwe kolomnaam, die worden aangeleverd als een lijst.    Als de kolom niet bestaat, wordt er een uitzondering gegenereerd tenzij er door de optionele <code>missingField</code> een alternatief wordt opgegeven (bijvoorbeeld <code>MissingField.UseNull</code> of <code>MissingField.Ignore</code>).


## Examples

### Example #1 
De kolomnaam CustomerNum vervangen door CustomerID in de tabel.
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
De kolomnaam CustomerNum vervangen door CustomerID en PhoneNum door Phone in de tabel.
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
De kolomnaam NewCol vervangen door NewColumn in de tabel en negeren als die kolom niet in de tabel staat.
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
