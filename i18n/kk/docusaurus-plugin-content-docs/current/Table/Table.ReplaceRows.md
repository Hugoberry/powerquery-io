---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Көрсетілген жолдар ауқымын көрсетілген жолдармен ауыстырады.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Details

Кіріс <code>table</code> ішіндегі <code>count</code> көрсетілген жолдар санын <code>offset</code> кейін бастап көрсетілген <code>rows</code> жолдарымен ауыстырады. <code>rows</code> параметрі — жазбалар тізімі.    <ul>       <li><code>table</code>: ауыстыру орындалатын кесте.</li>       <li><code>offset</code>: ауыстыруды орындау алдында өткізіп жіберу керек жолдар саны.</li>       <li><code>count</code>: ауыстыру керек жолдар саны.</li>       <li><code>rows</code>: <code>table</code> ішіне <code>offset</code> арқылы көрсетілген орынға кірістіру керек жол жазбаларының тізімі.</li>    </ul>


## Examples

### Example #1 
1-орыннан бастап 3 жолды ауыстыру.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
