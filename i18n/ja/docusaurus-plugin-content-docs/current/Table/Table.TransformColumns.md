---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

1 つ以上の列の値を変換します。


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

<code>transformOperations</code> に一覧表示されている各列操作を適用して <code>table</code> を変換します (形式は \{ column name, transformation } または \{ column name, transformation, new column type })。    <code>defaultTransformation</code> を指定すると、<code>transformOperations</code> に一覧表示されていないすべての列に適用されます。    <code>transformOperations</code> に一覧表示されている列が存在しない場合は、省略可能なパラメーター <code>missingField</code> が代替を指定しない限り、例外がスローされます (例: <code>MissingField.UseNull</code> または <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
列 [A] のテキスト値を数値に変換し、列 [B] の数値をテキスト値に変換します。
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
存在しない列 [X] の数値をテキスト値に変換します。存在しない列は無視されます。
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
存在しない列 [X] の数値をテキスト値に変換します。存在しない列には既定で NULL が設定されます。
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
列 [B] 内の数値を増分してテキスト値に変換し、他のすべての列を数値に変換します。
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
