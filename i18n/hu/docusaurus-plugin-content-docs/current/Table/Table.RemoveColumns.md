---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Eltávolítja a megadott sorokat.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Eltávolítja a megadott <code>columns</code> oszlopot a megadott <code>table</code> táblából.    Ha a megadott oszlop nem létezik, a rendszer hibát jelez. Ez nem történik meg, ha a választható <code>missingField</code> paraméterrel meg van adva egy alternatív viselkedés (például <code>MissingField.UseNull</code> vagy <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Eltávolítja a [Phone] oszlopot a táblából.
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
Megpróbál eltávolítani egy nem létező oszlopot a táblából.
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
