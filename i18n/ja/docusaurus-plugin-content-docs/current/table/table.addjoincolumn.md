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

`table1` の行と `table2` の行を、(`table1` の) `key1` と (`table2` の) `key2` で選択されたキー列の値の等値に基づいて結合します。結果は `newColumnName` という名前の列に入力されます。 この関数は JoinKind に LeftOuter を指定した Table.Join と同じように動作します。ただし、結合結果は、フラット化された形式ではなく、入れ子になります。


## Examples

### Example #1
\[saleID\] で結合したテーブル (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) から (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) に "price/stock" という名前の結合列を追加します。
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
