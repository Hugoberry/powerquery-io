---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

<code>column</code> の値と <code>hash</code> 関数に基づいて、<code>table</code> を <code>groups</code> 個の一連のテーブルにパーティション分割します。    <code>hash</code> 関数を <code>column</code> 行の値に適用して、行のハッシュ値を取得します。ハッシュ値の剰余 <code>groups</code> により、行の配置先の返されるテーブルが決まります。    <ul>       <li><code>table</code>: パーティション分割するテーブル。</li>       <li><code>column</code>: 行の配置先の返されるテーブルを決定するためにハッシュする列。</li>       <li><code>groups</code>: 入力テーブルをパーティション分割した後のテーブルの数。</li>       <li><code>hash</code>: ハッシュ値を取得するために適用する関数。</li>    </ul>  


## Examples

### Example #1 
ハッシュ関数として列の値を使用して、テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; を列 [a] で 2 つのテーブルにパーティション分割します。
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
