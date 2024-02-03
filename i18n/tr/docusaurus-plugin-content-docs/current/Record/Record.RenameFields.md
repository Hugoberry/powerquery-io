---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Bir listeden \{ old, new } biçiminde yeniden adlandırmaları uygular.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>record</code> girdisindeki alanları yeniden adlandırdıktan sonra <code>renames</code> listesinde belirtilen yeni alan adlarına bir kayıt döndürür. Birden çok yeniden adlandırma için iç içe yerleştirilmiş liste kullanılabilir (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Kayıttaki &#34;UnitPrice&#34; alanını &#34;Price&#34; olarak yeniden adlandırır.
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
Kayıttaki &#34;UnitPrice&#34; alanını &#34;Price&#34; olarak ve &#34;OrderNum&#34; alanını &#34;OrderID&#34; olarak adlandırır.
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
