---
title: Table.PositionOfAny
---

# Table.PositionOfAny


テーブル内の指定されたいずれかの行の位置を返します。


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

最初に出現する `table` の一覧の `rows` から行の位置を返します。発生が検出されていない場合は -1 を返します。

-   `table`: 入力テーブル。
-   `rows`: 位置を調べるテーブル内の行の一覧。
-   `occurrence`: *(省略可能)* 出現するどの行を返すかを指定します。
-   `equationCriteria`: *(省略可能)* テーブルの行と行の比較を制御します。


## Examples

### Example #1
テーブル `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` で最初に出現する \[a = 2, b = 4\] または \[a = 6, b = 8\] の位置を調べます。
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
テーブル `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}` で出現するすべての \[a = 2, b = 4\] または \[a = 6, b = 8\] の位置を調べます。
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
