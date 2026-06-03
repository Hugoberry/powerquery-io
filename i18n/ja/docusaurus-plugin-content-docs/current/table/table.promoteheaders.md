---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


値の先頭行を新しい列見出し (つまり列名) に昇格させます。


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

値の先頭行を新しい列見出し (つまり列名) に昇格させます。既定では、テキストと数値のみが見出しに昇格されます。有効なオプション:

-   `PromoteAllScalars` : `true` に設定すると、先頭行のすべてのスカラー値が `Culture` (指定されている場合、指定されていない場合は現在のドキュメント ロケール) を使用して見出しに昇格されます。 テキストに変換できない値には、既定の列名が使用されます。
-   `Culture` : 対象データのカルチャを指定するカルチャ名。


## Examples

### Example #1
テーブルの値の先頭行を昇格させます。
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
テーブルの先頭行にあるすべてのスカラー値を見出しに昇格します。
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
