---
title: Table.PositionOf
---

# Table.PositionOf


## Description

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


## Details

指定された <code>table</code> で最初に出現する <code>row</code> の行の位置を返します。1 つも出現しない場合は -1 を返します。    <ul>       <li><code>table</code>: 入力テーブル。</li>       <li><code>row</code>: 位置を調べるテーブル内の行。</li>       <li><code>occurrence</code>: <i>[省略可能]</i> 出現するどの行を返すかを指定します。</li>       <li><code>equationCriteria</code>: <i>[省略可能]</i> テーブルの行と行の比較を制御します。</li>    </ul>    


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; で最初に出現する [a = 2, b = 4] の位置を調べます。
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
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; で 2 番目に出現する [a = 2, b = 4] の位置を調べます。
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
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; で出現するすべての [a = 2, b = 4] の位置を調べます。
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
