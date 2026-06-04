---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Eltávolítja a megadott sorokat.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Eltávolítja a megadott `columns` oszlopot a megadott `table` táblából. Ha a megadott oszlop nem létezik, a rendszer hibát jelez. Ez nem történik meg, ha a választható `missingField` paraméterrel meg van adva egy alternatív viselkedés (például `MissingField.UseNull` vagy `MissingField.Ignore`).


## Examples

### Example #1
Eltávolítja a \[Phone\] oszlopot a táblából.
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
