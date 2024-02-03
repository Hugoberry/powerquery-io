---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

特定のカルチャを使用して、\{ column, type } という形式の型変換を適用します。


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

省略可能なパラメーター <code>culture</code> で指定されたカルチャ (例: "en-US") を使用して、パラメーター <code>typeTransformations</code> で指定された列に変換操作を適用する (形式は \{ column name, type name}) ことで、入力 <code>table</code> からテーブルを返します。    列が存在しない場合、例外がスローされます。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; から列 [a] の数値をテキスト値に変換します。
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
