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

Соединяет строки таблицы <code>table1</code> со строками таблицы <code>table2</code> с учетом тождественности значений ключевых столбцов, выбранных в <code>key1</code> (для <code>table1</code>) и в <code>key2</code> (для <code>table2</code>). Результаты записываются в столбец с именем <code>newColumnName</code>.<br />Необязательное значение <code>joinKind</code> указывает вид выполняемого соединения. По умолчанию выполняется левое внешнее соединение, если <code>joinKind</code> не указано.<br />Необязательный набор <code>keyEqualityComparers</code> может быть включен для указания способа сравнения ключевых столбцов. Сейчас эта функция предназначена только для внутреннего использования.<br />  


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
