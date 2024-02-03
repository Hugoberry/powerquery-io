---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Визначає, чи всі рядки таблиці відповідають вказаній умові.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Визначає, чи всі рядки <code>table</code> відповідають <code>condition</code>. Повертає <code>true</code>, якщо всі рядки відповідають умові, або <code>false</code> в іншому випадку.


## Examples

### Example #1 
Визначити, чи всі значення рядків у стовпці [a] рівні в таблиці.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи всі значення рядків дорівнюють [a = 1, b = 2] у таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
