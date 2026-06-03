---
title: Table.PositionOf
---

# Table.PositionOf


テーブル内の行の位置を返します。


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

指定された `row` で最初に出現する `table` の行の位置を返します。発生が検出されていない場合は -1 を返します。

-   `table`: 入力テーブル。
-   `row`: 位置を調べるテーブル内の行。
-   `occurrence`: *(省略可能)* 出現するどの行を返すかを指定します。
-   `equationCriteria`: *(省略可能)* テーブルの行と行の比較を制御します。


## Examples

### Example #1
テーブル `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` で最初に出現する \[a = 2, b = 4\] の位置を調べます。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
テーブル `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` で 2 番目に出現する \[a = 2, b = 4\] の位置を調べます。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
テーブル `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` で出現するすべての \[a = 2, b = 4\] の位置を調べます。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
