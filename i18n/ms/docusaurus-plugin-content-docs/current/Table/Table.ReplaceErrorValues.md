---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Gantikan nilai ralat dalam lajur yang ditentukan dengan nilai ditentukan yang berkaitan.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Gantikan nilai ralat dalam lajur yang ditentukan daripada <code>table</code> dengan nilai baharu dalam senarai <code>errorReplacement</code>. Format senarai ialah \{\{column1, value1}, …}. Mungkin hanya terdapat satu nilai gantian setiap lajur, tentukan lajur lebih daripada sekali akan menyebabkan ralat.


## Examples

### Example #1 
Gantikan nilai ralat dengan teks &#34;world&#34; dalam jadual.
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
Gantikan nilai ralat dalam lajur A dengan teks &#34;hello&#34; dan dalam lajur B dengan teks &#34;world&#34; dalam jadual.
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
