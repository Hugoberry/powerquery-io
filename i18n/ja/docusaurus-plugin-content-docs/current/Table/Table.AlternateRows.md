---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

初期オフセットを保持し、それ以降の行を交互に保持またはスキップします。


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

初期オフセットを保持し、それ以降の行を交互に保持またはスキップします。    <ul>       <li><code>table</code>: 入力テーブル。</li>       <li><code>offset</code>: 繰り返しを開始する前に保持する行数。</li>       <li><code>skip</code>: 繰り返しごとに削除する行数。</li>       <li><code>take</code>: 繰り返しごとに保持する行数。</li>    </ul>    


## Examples

### Example #1 
テーブルから、最初の行から開始し 1 行おきにスキップと保持を繰り返したテーブルを返します。
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
