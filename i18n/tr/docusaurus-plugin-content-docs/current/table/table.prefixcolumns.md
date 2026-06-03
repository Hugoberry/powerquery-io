---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Sütunların tümünün verilen metin ile başladığı bir tablo döndürür.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Sağlanan `table` öğesine ilişkin tüm sütun adlarının başına ön ek olarak, verilen `prefix` metninin ve `prefix.ColumnName` formunda bir nokta getirilen bir tablo döndürür.


## Examples

### Example #1
Tablodaki sütunların başına ön ek olarak "MyTable" getirir.
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
