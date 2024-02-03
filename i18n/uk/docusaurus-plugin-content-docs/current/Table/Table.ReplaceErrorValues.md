---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Замінює значення помилок у вказаних стовпцях на відповідне вказане значення.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Замінює значення помилок у вказаних стовпцях <code>table</code> на нові значення в списку <code>errorReplacement</code>. Формат списку – \{\{column1, value1}, …}. Допускається лише одне значення заміни на стовпець. Якщо вказати стовпець більше одного разу, можлива помилка.


## Examples

### Example #1 
Замінити значення помилки на текст &#34;world&#34; у таблиці.
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
Замінити в таблиці значення помилки в стовпці A на текст &#34;hello&#34;, а в стовпці B – на текст &#34;world&#34;.
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
