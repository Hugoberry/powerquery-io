---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


指定された列のエラー値を関連する指定値に置換します。


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

指定された列 `table` のエラー値をリスト `errorReplacement` の新しい値に置換します。リストのフォーマットは \{\{column1, value1\}, …\} です。置換する値は 1 列につき 1 つのみで、列を 2 回以上指定するとエラーになります。


## Examples

### Example #1
テーブルで、エラー値をテキスト "world" に置換します。
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
テーブルで、列 A のエラー値をテキスト "hello" に、列 B のエラー値をテキスト "world" に置換します。
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
