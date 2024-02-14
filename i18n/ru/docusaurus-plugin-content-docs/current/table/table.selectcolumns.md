---
title: Table.SelectColumns
---

# Table.SelectColumns


Возвращает таблицу, содержащую только определенные столбцы.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Возвращает <code>table</code> только с указанными <code>columns</code>.    <ul>       <li><code>table</code>: предоставленная таблица.</li>       <li><code>columns</code>: список столбцов из таблицы <code>table</code>, которые должны быть возвращены. Столбцы в возвращаемой таблице содержатся в порядке, указанном параметром <code>columns</code>.</li>       <li><code>missingField</code>: <i>(необязательно)</i> что делать, если столбец не существует.  Пример: <code>MissingField.UseNull</code> или <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Включить только столбец [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
Включить только столбцы [CustomerID] и [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
Если включенный столбец не существует, результат по умолчанию будет ошибкой.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
Если включенный столбец не существует, параметр &lt;code&gt;MissingField.UseNull&lt;/code&gt; создаст столбец с значениями NULL.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
