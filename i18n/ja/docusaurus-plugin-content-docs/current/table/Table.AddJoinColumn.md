---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


指定された列でテーブルを結合し、結合結果を新しい列に生成します。


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

<code>table1</code> の行と <code>table2</code> の行を、(<code>table1</code> の) <code>key1</code> と (<code>table2</code> の) <code>key2</code> で選択されたキー列の値の等値に基づいて結合します。結果は <code>newColumnName</code> という名前の列に入力されます。この関数は JoinKind に LeftOuter を指定した Table.Join と同じように動作します。ただし、結合結果は、フラット化された形式ではなく、入れ子になります。


## Examples

### Example #1 
[saleID] で結合したテーブル (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) から (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) に &#34;price/stock&#34; という名前の結合列を追加します。
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
