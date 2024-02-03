---
title: Table.FillDown
---

# Table.FillDown


## Description

Розповсюджує значення з попередньої клітинки до нижніх клітинок з нульовим значенням у стовпці.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Повертає таблицю із зазначеного <code>table</code>, куди розповсюджується значення попередньої клітинки до нижніх клітинок із нульовим значенням у зазначеному <code>columns</code>.


## Examples

### Example #1 
Повернути таблицю, де Null-значення в стовпці [Place] заповнено значенням із верхніх клітинок таблиці.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
