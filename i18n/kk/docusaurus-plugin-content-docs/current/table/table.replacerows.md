---
title: Table.ReplaceRows
---

# Table.ReplaceRows


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


## Remarks

Кіріс `table` ішіндегі `count` көрсетілген жолдар санын `offset` кейін бастап көрсетілген `rows` жолдарымен ауыстырады. `rows` параметрі — жазбалар тізімі.

-   `table`: ауыстыру орындалатын кесте.
-   `offset`: ауыстыруды орындау алдында өткізіп жіберу керек жолдар саны.
-   `count`: ауыстыру керек жолдар саны.
-   `rows`: `table` ішіне `offset` арқылы көрсетілген орынға кірістіру керек жол жазбаларының тізімі.


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
