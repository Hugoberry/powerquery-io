---
title: Record.ReorderFields
---

# Record.ReorderFields


Изменяет порядок полей записи в соответствии с порядком списка имен полей.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Изменяет порядок полей записи в соответствии с порядком списка имен полей.

-   `record`: Запись, содержащая поля, порядок которых нужно изменить.
-   `fieldOrder`: Список, содержащий новый порядок полей для применения к записи. Значения полей сохраняются, а поля, не указанные в этом параметре, сохраняют неизменное положение.
-   `missingField`: указывает ожидаемое действие для отсутствующих значений в строке, содержащей меньше полей, чем ожидалось. Допустимы следующие значения:
    -   `MissingField.Error`: (по умолчанию) указывает, что отсутствие полей должно привести к ошибке. Если значение параметра`missingField` не указано, используется это значение.
    -   `MissingField.Ignore`: указывает, что отсутствующие поля следует игнорировать.
    -   `MissingField.UseNull`: указывает, что отсутствующие поля должны быть включены как значения `null`.


## Examples

### Example #1
Изменение порядка некоторых полей в записи.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Измените порядок некоторых полей в записи и включите `null` для всех отсутствующих полей.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
