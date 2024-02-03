---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Визначає, чи відповідають вказаній умові будь-які рядки таблиці.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Визначає, чи є рядки в <code>table</code>, що відповідають заданій умові <code>condition</code>. Повертає <code>true</code>, якщо будь-який рядок відповідає умові, або <code>false</code> в іншому випадку.


## Examples

### Example #1 
Визначити, чи існують рівні значення рядків у стовпці [a] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Визначити, чи існують значення рядків, що дорівнюють [a = 1, b = 2], у таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
