---
title: Record.ReorderFields
---

# Record.ReorderFields


Перевпорядковує поля запису відповідно до порядку списку імен полів.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Перевпорядковує поля в записі відповідно до порядку списку імен полів.

-   `record`: запис, що містить поля для перевпорядкування.
-   `fieldOrder`: список, що містить новий порядок полів, який потрібно застосувати до запису. Значення полів зберігаються, а поля, не вказані в цьому параметрі, залишаються на своїх початкових місцях.
-   `missingField`: указує очікувану дію для відсутніх значень у рядку, який містить менше стовпців, ніж очікується. Припустимі значення:
    -   `MissingField.Error`: (стандартно) указує, що відсутність полів має призвести до помилки. Якщо для параметра `missingField` не введено значення, використовується це значення.
    -   `MissingField.Ignore`: указує, що відсутні поля слід ігнорувати.
    -   `MissingField.UseNull`: указує, що відсутні поля слід включати як значення `null`.


## Examples

### Example #1
Змінити порядок певних полів у записі.
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
Перевпорядкувати деякі поля в записі та включити `null` для всіх відсутніх полів.
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
