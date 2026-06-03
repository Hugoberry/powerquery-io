---
title: Record.RenameFields
---

# Record.RenameFields


Bir listeden \{ old, new \} biçiminde yeniden adlandırmaları uygular.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

`record` girdisindeki alanları yeniden adlandırdıktan sonra `renames` listesinde belirtilen yeni alan adlarına bir kayıt döndürür. Birden çok yeniden adlandırma için iç içe yerleştirilmiş liste kullanılabilir (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Kayıttaki "UnitPrice" alanını "Price" olarak yeniden adlandırır.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Kayıttaki "UnitPrice" alanını "Price" olarak ve "OrderNum" alanını "OrderID" olarak adlandırır.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
