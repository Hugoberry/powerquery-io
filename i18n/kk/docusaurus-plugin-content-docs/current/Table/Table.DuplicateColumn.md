---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Көрсетілген атауы бар баған көшірмесін жасайды. Мәндер және түр бастапқы бағаннан көшіріледі.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Details

<code>table</code> кестесінде <code>columnName</code> атты бағанның көшірмесін жасау. <code>newColumnName</code> бағаны үшін мәндер және түр <code>columnName</code> бағанынан көшіріледі.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; кестесіндегі &#34;көшірілген баған&#34; деген бағанда &#34;a&#34; бағанының көшірмесін жасаңыз.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
