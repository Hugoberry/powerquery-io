---
title: Table.HasColumns
---

# Table.HasColumns


Tablonun belirtilen sütunları içerip içermediğini belirtir.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

`table` tablosunun belirtilen `columns` sütunlarını içerip içermediğini belirtir. Tablo sütunları içeriyorsa `true`, içermiyorsa `false` değerini döndürür.


## Examples

### Example #1
Tabloda \[Name\] sütununun bulunup bulunmadığını belirler.
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
Tabloda \[Name\] ve \[PhoneNumber\] sütunlarının bulunup bulunmadığını belirler.
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
