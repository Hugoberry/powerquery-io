---
title: Table.FillUp
---

# Table.FillUp


## Description

Розповсюджує значення клітинки до верхніх клітинок з нульовим значенням у стовпці.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Повертає таблицю із зазначеного <code>table</code>, куди розповсюджується значення наступної клітинки до верхніх клітинок із нульовим значенням у зазначеному <code>columns</code>.


## Examples

### Example #1 
Повернути таблицю, де Null-значення в стовпці [Column2] заповнено значенням із нижніх клітинок таблиці.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
