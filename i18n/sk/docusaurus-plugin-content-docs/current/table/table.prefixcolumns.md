---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Vráti tabuľku, v ktorej budú mať všetky stĺpce na začiatku daný text v rámci predpony.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Vráti tabuľku, v ktorej sú všetky názvy stĺpcov zo zoznamu `table` doplnené o zadaný text `prefix` a bodku v tvare `prefix.ColumnName`.


## Examples

### Example #1
Vložte predponu „Moja tabuľka“ pred stĺpce v tabuľke.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
