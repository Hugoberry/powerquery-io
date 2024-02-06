---
title: Table.TransformColumns
---

# Table.TransformColumns


轉換一或多個資料行的值。


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

套用 <code>transformOperations</code> 列出的每個資料行作業 (格式為 \{ column name, transformation } 或 \{ column name, transformation, new column type }) 以轉換 <code>table</code>。    如果指定了 <code>defaultTransformation</code>，則會套用到 <code>transformOperations</code> 中未列出的所有資料行。    如果 <code>transformOperations</code> 中列出的資料行不存在，則除非選擇性參數 <code>missingField</code> 指定替代專案，否則會擲出例外狀況 (例如，<code>MissingField.UseNull</code>或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
將資料行 [A] 中的文字值轉換為數字值，將資料行 [B] 中的數字值轉換為文字值。
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
將遺漏資料行 [X] 中的數值轉換成文字值，忽略不存在的資料行。
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
將遺漏的資料行 [X] 中的數值轉換成文字值，若為不存在的資料行，則預設值為 NULL。
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
將資料行 [B] 中的數字值遞增並將它們轉換成文字值，並將所有其他資料行轉換成數字。
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
