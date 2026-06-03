---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Преобразует имена столбцов с помощью предоставленной функции.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Преобразует имена столбцов с помощью предоставленной функции `nameGenerator`. Допустимые параметры:

`MaxLength` — максимальная длина имен новых столбцов. Если функция создает более длинное имя, оно будет усечено.

`Comparer` — используется для управления сравнением при создании имен столбцов. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.

В языке формул доступны следующие встроенные функции сравнения:

-   `Comparer.Ordinal` — используется для точного сравнения по порядковому номеру
-   `Comparer.OrdinalIgnoreCase` — используется для точного сравнения по порядковому номеру без учета регистра
-   `Comparer.FromCulture` — используется для сравнения с учетом языка и региональных параметров


## Examples

### Example #1
Удаление символа `#(tab)` из имен столбцов
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Преобразование имен столбцов для создания имен длиной 6 символов без учета регистра.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
