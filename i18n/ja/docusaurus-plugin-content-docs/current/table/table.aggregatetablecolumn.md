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

`table`\[`column`\] 内のテーブルをテーブルの集計値を含む複数の列に集計します。`aggregations` を使用して、集計するテーブルを含む列、値を生成するためにテーブルに適用する集計関数、および作成する集計列の名前を指定します。


## Examples

### Example #1
テーブル `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` 内の `[t]` のテーブル列を集計して、`[t.a]` の合計、`[t.b]` の最小値と最大値、および `[t.a]` の値のカウントを計算します。
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
