---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Tiek atgriezta tabula, kur visām kolonnām ir pievienots prefikss ar norādīto tekstu.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Tiek atgriezta tabula, kur visiem kolonnu nosaukumiem no norādītā <code>table</code> ir prefiksi ar norādīto tekstu <code>prefix</code>, kā arī punkts šādā formātā: <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Pievienojiet tabulas kolonnām prefiksu &#34;MyTable&#34;.
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
