---
title: Table.RenameColumns
---

# Table.RenameColumns


Применяет переименование в форме \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Выполняет заданное переименование столбцов в таблице `table`. Операция замены `renames` содержит список пар значений: старое имя столбца и новое имя столбца, предоставляемые в списке. Если столбец не существует, генерируется ошибка, кроме случаев, когда необязательный параметр `missingField` задает иное действие (например, `MissingField.UseNull` или `MissingField.Ignore`).


## Examples

### Example #1
Замена имени столбца CustomerNum на CustomerID в таблице.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Замена имени столбца CustomerNum на CustomerID, а имя PhoneNum на Phone в таблице.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Замена имени столбца NewCol на NewColumn в таблице и пропуск замены, если столбца не существует.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
