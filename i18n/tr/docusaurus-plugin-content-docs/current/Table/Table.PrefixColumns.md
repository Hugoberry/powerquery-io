---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Sütunların tümünün verilen metin ile başladığı bir tablo döndürür.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Sağlanan <code>table</code> öğesine ilişkin tüm sütun adlarının başına ön ek olarak, verilen <code>prefix</code> metninin ve <code>prefix</code><code>.ColumnName</code> formunda bir nokta getirilen bir tablo döndürür.


## Examples

### Example #1 
Tablodaki sütunların başına ön ek olarak &#34;MyTable&#34; getirir.
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
