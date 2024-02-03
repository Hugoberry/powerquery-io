---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Vráti tabuľku, v ktorej budú mať všetky stĺpce na začiatku daný text v rámci predpony.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Vráti tabuľku, v ktorej budú mať všetky názvy stĺpcov z uvedenej tabuľky <code>table</code> daný text v rámci predpony <code>prefix</code> a okrem toho budú mať bodku, vo formáte <code>prefix</code><code>.ColumnName</code>.


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
