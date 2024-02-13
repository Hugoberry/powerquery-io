---
title: Table.SingleRow
---

# Table.SingleRow


Tablodaki tek bir satırı döndürür.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

<code>table</code> satırındaki tek bir satırı döndürür. <code>table</code> birden fazla satır içeriyorsa, özel durum oluşur.


## Examples

### Example #1 
Tablodaki tek satırı döndürür.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
