---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Применяет переименование в форме \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Выполняет заданное переименовывание столбцов в таблице <code>table</code>. В операции замены <code>renames</code> применяется список пар значений - старое имя столбца и новое имя столбца.    Если столбец не существует, возникает исключение, если необязательным параметром <code>missingField</code> не задана альтернатива (например, <code>MissingField.UseNull</code> или <code>MissingField.Ignore</code>).


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
