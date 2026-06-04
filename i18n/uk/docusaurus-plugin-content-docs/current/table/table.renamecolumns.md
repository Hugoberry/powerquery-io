---
title: Table.RenameColumns
---

# Table.RenameColumns


Застосовує перейменування у вигляді \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Вносить задані перейменування в стовпці таблиці `table`. Операція заміни `renames` складається зі списку двох значень, старого імені стовпця та нового імені стовпця, які надаються в списку. У разі відсутності стовпця стається помилка, якщо додатковий параметр `missingField` не визначає інше (наприклад, `MissingField.UseNull` або `MissingField.Ignore`).


## Examples

### Example #1
Замінити в таблиці назву стовпця "CustomerNum" на "CustomerID".
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
Замінити в таблиці назви стовпців "CustomerNum" на "CustomerID" та "PhoneNum" на "Phone".
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
Замінити в таблиці назву стовпця "NewCol" на "NewColumn". Не виконувати жодних дій, якщо його не існує.
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
