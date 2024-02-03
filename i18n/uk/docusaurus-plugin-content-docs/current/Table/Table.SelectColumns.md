---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Повертає таблицю лише із визначеними стовпцями.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Повертає "<code>table</code>" із визначенням лише <code>columns</code>.    <ul>       <li>"<code>table</code>" – це вказана таблиця.</li>       <li><code>columns</code> – список стовпців із таблиці "<code>table</code>", яку потрібно повернути. У стовпців у цій таблиці має бути порядок, заданий за допомогою <code>columns</code>.</li>       <li><code>missingField</code> – <i>(необов’язковий)</i> аргумент дії на випадок, якщо стовпець не існує, наприклад <code>MissingField.UseNull</code> або <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Включити лише стовпець [Ім’я].
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
Включити лише стовпці [Ідентифікатор_клієнта] та [Ім’я].
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
Якщо включений стовпець не існує, результат за замовчуванням – помилка.
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
Якщо включений стовпець не існує, параметр &lt;code&gt;MissingField.UseNull&lt;/code&gt; створює стовпець із Null-значеннями.
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
