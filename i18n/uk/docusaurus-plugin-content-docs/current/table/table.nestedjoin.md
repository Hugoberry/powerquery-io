---
title: Table.NestedJoin
---

# Table.NestedJoin


Виконує об’єднання зазначених стовпців між таблицями та створює результат об’єднання в новому стовпці.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Дає змогу об’єднати рядки таблиць "`table1`" і "`table2`" на основі рівності значень у вибраних стовпцях ключів ("`key1`" – для "`table1`" і "`key2`" – для "`table2`"). Результати потрапляють у стовпець з іменем "`newColumnName`".

За допомогою додаткового параметра `joinKind` можна вказати потрібний тип об’єднання. Якщо значення `joinKind` не задано, за замовчуванням виконується ліве зовнішнє з’єднання.

Можна включити додатковий набір параметрів `keyEqualityComparers`, щоб указати, як порівнювати стовпці ключів. Зараз ця функція призначена лише для внутрішнього використання.


## Examples

### Example #1
Об’єднайте дві таблиці за допомогою одного ключового стовпця.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
