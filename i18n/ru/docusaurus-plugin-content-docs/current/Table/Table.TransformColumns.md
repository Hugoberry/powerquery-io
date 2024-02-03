---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Преобразует значения в одном или нескольких столбцах.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Преобразует <code>table</code> путем применения каждой операции столбца, указанной в <code>transformOperations</code> (в формате \{ имя столбца, преобразование } или \{ имя столбца, преобразование, новый тип столбца }).    Если указан <code>defaultTransformation</code>, он будет применен ко всем столбцам, не указанным в <code>transformOperations</code>.    Если столбец, указанный в <code>transformOperations</code>, не существует, генерируетсяч исключение, кроме случаев, когда необязательный параметр <code>missingField</code> не указывает иное (например, <code>MissingField.UseNull</code> или <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Преобразуйте текстовые значения из столбца [A] в числовое значение, а числовые значения из столбца [B] в текстовые.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Преобразуйте числовые значения в отсутствующем столбце [X] в текстовые значения, пропуская несуществующие столбцы.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Преобразуйте числовые значения в отсутствующем столбце [X] в текстовые значения, по умолчанию используя значение NULL для несуществующих столбцов.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Увеличьте числовые значения в столбце [B] и преобразуйте их в текстовые значения, а все остальные столбцы преобразуйте в числа.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
