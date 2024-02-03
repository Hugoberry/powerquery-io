---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Suprimeix les columnes especificades.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Suprimeix les <code>columns</code> especificades a partir del <code>table</code> proporcionat.    Si no existeix la columna, es produeix una excepció tret que el paràmetre opcional <code>missingField</code> especifiqui una alternativa (per exemple, <code>MissingField.UseNull</code> o bé <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Suprimeix la columna [Phone] de la taula.
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
Proveu de suprimir una columna no existent a la taula.
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
