---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Тиісті берілген мәні бар көрсетілген бағандардағы қате мәндерін ауыстырады.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

<code>table</code> көрсетілген бағандарындағы қате мәндерін <code>errorReplacement</code> тізіміндегі жаңа мәндермен ауыстырады. Тізімнің пішімі - \{\{column1, value1}, …}. Әр бағанға бір ғана ауыстырғыш мән болуы мүмкін, бағанды бірнеше рет көрсету қатеге әкеледі.


## Examples

### Example #1 
Кестеде қате мәнін &#34;әлем&#34; мәтінімен ауыстыру.
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
Кестеде қате мәнін А бағанында &#34;сәлем&#34; мәтінімен және B бағанында &#34;әлем&#34; мәтінімен ауыстыру.
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
