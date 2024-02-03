---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Көрсетілген түрлерге сәйкес келшетін атаулардың тізімін қайтарады.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

<code>listOfTypes</code> ішінде көрсетілген түрлерге сәйкес келетін <code>table</code> кестесіндегі бағандардың аты берілген тізімді қайтарады.


## Examples

### Example #1 
Кестеден Number.Type түріндегі бағандар атауларын қайтару.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
