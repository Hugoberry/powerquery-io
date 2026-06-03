---
title: Table.NestedJoin
---

# Table.NestedJoin


Выполняет соединения таблиц по указанным столбцам и выводит результат соединения в новом столбце.


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

Соединяет строки таблицы `table1` со строками таблицы `table2` с учетом тождественности значений ключевых столбцов, выбранных в `key1` (для `table1`) и в `key2` (для `table2`). Результаты записываются в столбец с именем `newColumnName`.

Необязательное значение `joinKind` указывает вид выполняемого соединения. По умолчанию выполняется левое внешнее соединение, если `joinKind` не указано.

Необязательный набор `keyEqualityComparers` может быть включен для указания способа сравнения ключевых столбцов. Сейчас эта функция предназначена только для внутреннего использования.


## Examples

### Example #1
Объедините две таблицы с помощью одного ключевого столбца.
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
