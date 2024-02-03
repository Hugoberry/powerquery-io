---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Применяет преобразование типа формы \{ column, type }, используя конкретный язык и региональные параметры.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Возвращает таблицу из входных данных <code>table</code>, применяя операцию преобразования к столбцам, указанным в параметре <code>typeTransformations</code> (с форматом \{ column name, type name}), используя язык и региональные параметры, указанные в необязательном параметре <code>culture</code> (например, "ru-RU").    Если столбец не существует, возникает исключение.


## Examples

### Example #1 
Преобразовать числовые значения в столбце [a] в текстовые значения из таблицы &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
