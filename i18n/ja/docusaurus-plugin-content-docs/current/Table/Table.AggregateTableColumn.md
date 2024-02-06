---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


テーブル列を親テーブルの複数の列に集計します。


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

<code>table</code>[<code>column</code>] 内のテーブルをテーブルの集計値を含む複数の列に集計します。<code>aggregations</code> を使用して、集計するテーブルを含む列、値を生成するためにテーブルに適用する集計関数、および作成する集計列の名前を指定します。


## Examples

### Example #1 
テーブル &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; 内の &lt;code&gt;[t]&lt;/code&gt; のテーブル列を集計して、&lt;code&gt;[t.a]&lt;/code&gt; の合計、&lt;code&gt;[t.b]&lt;/code&gt; の最小値と最大値、および &lt;code&gt;[t.a]&lt;/code&gt; の値のカウントを計算します。
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
