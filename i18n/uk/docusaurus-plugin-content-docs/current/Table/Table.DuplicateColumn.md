---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Дублює стовпець із вказаним іменем стовпця. Значення та тип копіюються з вихідного стовпця.


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

Дублювати стовпець з іменем <code>columnName</code> у таблицю <code>table</code>. Значення та тип для стовпця <code>newColumnName</code> копіюються зі стовпця <code>columnName</code>.


## Examples

### Example #1 
Дублювання стовпця &#34;a&#34; у стовпець з іменем &#34;скопійований стовпець&#34; у таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
