---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Sütun üst bilgilerinin düzeyini ilk değer satırına düşürür.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Sütun üst bilgilerinin düzeyini (örn. sütun başlıkları) ilk değer satırına düşürür. Varsayılan sütun adları "Column1", "Column2" vb. şekildedir.


## Examples

### Example #1 
Tablodaki ilk değer satırının düzeyini düşürür.
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
