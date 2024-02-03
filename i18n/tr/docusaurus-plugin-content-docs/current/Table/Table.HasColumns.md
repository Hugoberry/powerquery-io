---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Tablonun belirtilen sütunları içerip içermediğini belirtir.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

<code>table</code> tablosunun belirtilen <code>columns</code> sütunlarını içerip içermediğini belirtir. Tablo sütunları içeriyorsa <code>true</code>, içermiyorsa <code>false</code> değerini döndürür.


## Examples

### Example #1 
Tabloda [Name] sütununun bulunup bulunmadığını belirler.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Tabloda [Name] ve [PhoneNumber] sütunlarının bulunup bulunmadığını belirler.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
