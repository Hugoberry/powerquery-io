---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


使用特定文化特性來套用 \{ column, type } 格式的類型轉換。


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

使用選用參數 <code>culture</code> 中指定的文化特性 (Culture) (例如 "en-US")，將轉換作業套用至參數 <code>typeTransformations</code> 中指定的資料行 (格式為 \{ column name, type name})，以從輸入 <code>table</code> 傳回資料表。    如果資料行不存在，則會擲回例外狀況。


## Examples

### Example #1 
將資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中資料行 [a] 的數值轉換成文字值。
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
