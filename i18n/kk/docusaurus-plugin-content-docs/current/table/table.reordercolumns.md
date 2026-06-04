---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Көрсетілген ретпен орналасқан бағандары бар кестені қайтарады.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Кіріс `table` ішінен `columnOrder` арқылы көрсетілген ретпен орналасқан бағандар бар кестені қайтарады. Тізімде көрсетілмеген бағандардың ретін өзгерту мүмкін емес. Егер баған жоқ болса, `missingField` міндетті емес параметрі баламаны (мысалы, `MissingField.UseNull` немесе `MissingField.Ignore`) көрсетпесе, қате туындайды.


## Examples

### Example #1
Кестеде \[Phone\] және \[Name\] бағандарының ретін ауыстыру.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Кестеде \[Phone\] және \[Address\] бағандарының ретін ауыстыру немесе "MissingField.Ignore" пайдалану. Ол кестені өзгертпейді, себебі \[Address\] бағаны жоқ.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
