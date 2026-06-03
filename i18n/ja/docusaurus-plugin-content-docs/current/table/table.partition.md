---
title: Table.Partition
---

# Table.Partition


指定されたグループ数と列に基づいて、テーブルを一連のテーブルにパーティション分割します。


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

`column` の値と `hash` 関数に基づいて、`table` を `groups` 個の一連のテーブルにパーティション分割します。 `hash` 関数を `column` 行の値に適用して、行のハッシュ値を取得します。ハッシュ値の剰余 `groups` により、行の配置先の返されるテーブルが決まります。

-   `table`: パーティション分割するテーブル。
-   `column`: 行の配置先の返されるテーブルを決定するためにハッシュする列。
-   `groups`: 入力テーブルをパーティション分割した後のテーブルの数。
-   `hash`: ハッシュ値を取得するために適用する関数。


## Examples

### Example #1
ハッシュ関数として列の値を使用して、テーブル `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` を列 \[a\] で 2 つのテーブルにパーティション分割します。
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
