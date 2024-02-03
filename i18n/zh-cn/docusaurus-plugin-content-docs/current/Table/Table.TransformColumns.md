---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

转换一个或多个列的值。


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

通过应用 <code>transformOperations</code> 中列出的每个列操作来转换 <code>table</code> (格式为 \{ column name, transformation } 或 \{ column name, transformation, new column type })。    如果指定了 <code>defaultTransformation</code>，它将应用于未在 <code>transformOperations</code> 中列出的所有列。    如果 <code>transformOperations</code> 中列出的列不存在，则除非可选参数 <code>missingField</code> 指定了替代项，否则将引发一场(例如，<code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
将列 [A] 中的文本值转换为数字值，并将列 [B] 中的数字值转换为文本值。
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
将缺失列 [X] 中的数字值转换为文本值，同时忽略不存在的列。
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
将缺失列 [X] 中的数字值转换为文本值，同时将不存在的列中的值默认设置为 null。
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
递增列 [B] 中的数字值并将其转换为文本值，并将所有其他列转换为数字。
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
