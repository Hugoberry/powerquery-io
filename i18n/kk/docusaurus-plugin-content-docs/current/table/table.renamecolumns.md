---
title: Table.RenameColumns
---

# Table.RenameColumns


\{old, new\} пішінін қайта атау(лар)ды қолданады.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

`table` кестесіндегі бағандарды көрсетілген қайта атауларды орындайды. `renames` ауыстыру әрекеті тізімде көрсетілген екі мәннен, бұрынғы баған атауынан және жаңа баған атауынан, тұрады. Егер баған жоқ болса, `missingField` міндетті емес параметрі баламаны (мысалы, `MissingField.UseNull` немесе `MissingField.Ignore`) көрсетпесе, қате туындайды.


## Examples

### Example #1
Кестеде "CustomerNum" баған атауын "CustomerID" деп ауыстыру.
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
Кестеде "CustomerNum" баған атауын "CustomerID" деп және "PhoneNum" баған атауын "Phone" деп ауыстыру.
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
Кестеде "NewCol" баған атауын "NewColumn" деп ауыстыру және баған жоқ болса, елемеу.
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
