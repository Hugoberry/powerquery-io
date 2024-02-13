---
title: Record.RemoveFields
---

# Record.RemoveFields


Удаляет указанные поля из входной записи.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Возвращает запись, которая удаляет все поля, указанные в списке <code>fields</code>, из входных данных <code>record</code>. Если указанное поле не существует, возникает исключение.


## Examples

### Example #1 
Удаление поля Price из записи.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Удаление поля Price и Item из записи.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
