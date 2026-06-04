---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Тиісті берілген мәні бар көрсетілген бағандардағы қате мәндерін ауыстырады.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

`table` көрсетілген бағандарындағы қате мәндерін `errorReplacement` тізіміндегі жаңа мәндермен ауыстырады. Тізімнің пішімі - \{\{column1, value1\}, …\}. Әр бағанға бір ғана ауыстырғыш мән болуы мүмкін, бағанды бірнеше рет көрсету қатеге әкеледі.


## Examples

### Example #1
Кестеде қате мәнін "әлем" мәтінімен ауыстыру.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Кестеде қате мәнін А бағанында "сәлем" мәтінімен және B бағанында "әлем" мәтінімен ауыстыру.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
