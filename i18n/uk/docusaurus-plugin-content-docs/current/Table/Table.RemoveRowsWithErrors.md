---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Повертає таблицю з рядками, видаленими із вхідної таблиці, які містять помилку у принаймні одній клітинці. Якщо список стовпців задано, на наявність помилок перевіряються лише клітинки у зазначених стовпцях.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Повертає таблицю з рядками, видаленими із вхідної таблиці, які містять помилку у принаймні одній клітинці. Якщо список стовпців задано, на наявність помилок перевіряються лише клітинки у зазначених стовпцях.


## Examples

### Example #1 
Видалити значення помилки з першого рядка.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
