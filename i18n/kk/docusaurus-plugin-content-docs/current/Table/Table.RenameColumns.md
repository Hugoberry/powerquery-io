---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

\{old, new} пішінін қайта атау(лар)ды қолданады.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>table</code> кестесіндегі бағандарды көрсетілген қайта атауларды орындайды. <code>renames</code> ауыстыру әрекеті тізімде көрсетілген екі мәннен, бұрынғы баған атауынан және жаңа баған атауынан, тұрады.    Егер баған жоқ болса, <code>missingField</code> міндетті емес параметрі баламаны (мысалы, <code>MissingField.UseNull</code> немесе <code>MissingField.Ignore</code>) көрсетпесе, қиыс жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
Кестеде &#34;CustomerNum&#34; баған атауын &#34;CustomerID&#34; деп ауыстыру.
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
Кестеде &#34;CustomerNum&#34; баған атауын &#34;CustomerID&#34; деп және &#34;PhoneNum&#34; баған атауын &#34;Phone&#34; деп ауыстыру.
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
Кестеде &#34;NewCol&#34; баған атауын &#34;NewColumn&#34; деп ауыстыру және баған жоқ болса, елемеу.
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
