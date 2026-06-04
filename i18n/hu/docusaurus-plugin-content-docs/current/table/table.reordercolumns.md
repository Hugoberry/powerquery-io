---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Táblát ad vissza, amely a megadott sorrendben tartalmazza az oszlopokat.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Egy olyan táblát ad vissza a bemeneti `table` táblából, amely a(z) `columnOrder` által megadott sorrendben tartalmazza az oszlopokat. A listán nem szereplő oszlopok nem lesznek átrendezve. Ha az oszlop nem létezik, hibaüzenet jelenik meg, kivéve, ha a választható `missingField` paraméter alternatívát határoz meg (pl. `MissingField.UseNull` vagy `MissingField.Ignore`).


## Examples

### Example #1
Felcseréli a \[Phone\] és a \[Name\] oszlopot a táblában.
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
Felcseréli a \[Phone\] és az \[Address\] oszlopot a táblában, vagy a MissingField.Ignore műveletet használja. Nem módosítja a táblát, mert az \[Address\] oszlop nem létezik.
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
