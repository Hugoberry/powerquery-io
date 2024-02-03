---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Знижає рівень заголовків стовпців до першого рядка значень.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Знижає рівень заголовків стовпців (тобто назви стовпців) до першого рядка значень. За замовчуванням стовпці мають назви "Стовпець1", "Стовпець2" і так далі.


## Examples

### Example #1 
Знизити рівень першого рядка значень у таблиці.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
