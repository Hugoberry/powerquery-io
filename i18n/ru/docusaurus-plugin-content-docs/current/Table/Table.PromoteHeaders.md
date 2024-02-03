---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Назначает первую строку значений в качестве новых заголовков столбцов (например, имена столбцов).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Назначает первую строку значений в качестве новых заголовков столбцов (т. е. имен столбцов). По умолчанию заголовками назначаются только текстовые или числовые значения. Допустимые параметры:    <div>      <code>PromoteAllScalars</code>: если задано значение <code>true</code>, все скалярные значения в первой строке назначаются заголовками с использованием языка и региональных параметров (<code>Culture</code>), если они указаны (или текущего языкового стандарта документа).    Для значений, которые невозможно преобразовать в текст, будет использоваться имя столбца по умолчанию.    </div>    <div>    <code>Culture</code>: имя языка и региональных параметров для данных.    </div>  


## Examples

### Example #1 
Повышение уровня первой строки значений в таблице.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Назначение всех скалярных значений в первой строке таблицы заголовками.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
