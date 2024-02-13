---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


レコード列またはテーブル列を親テーブルの複数の列に展開します。


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

<code>table</code>[<code>column</code>] 内のテーブルを複数の行と列に展開します。<code>columnNames</code> を使用して、入れ子のテーブルから展開する列を選択します。既存の列と新しい列が競合しないように、<code>newColumnNames</code> を指定してください。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; の &lt;code&gt;[a]&lt;/code&gt; のテーブル列を &lt;code&gt;[t.a]&lt;/code&gt;、&lt;code&gt;[t.b]&lt;/code&gt;、&lt;code&gt;[t.c]&lt;/code&gt; の 3 つの列に展開します。
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
