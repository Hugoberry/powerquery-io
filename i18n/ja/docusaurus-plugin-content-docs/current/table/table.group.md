---
title: Table.Group
---

# Table.Group


同じキーを含むテーブル内の行をグループ化します。


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

`key` で定義されているキー列によって `table` の行をグループ化します。`key` には、単一の列名または列名のリストを指定できます。 グループごとに、キー列 (およびその値) と、`aggregatedColumns` によって指定された集計列を含むレコードが作成されます。 必要に応じて、`groupKind` と `comparer` を指定することもできます。  
  
データが既にキー列で並べ替えられている場合は、GroupKind.Local の `groupKind` を指定できます。これにより、特定の場合にグループ化のパフォーマンスが向上する可能性があります。 指定された一連のキー値を持つすべての行は隣接していると見なされます。  
  
`comparer` を渡すときに、異なるキーが等しいとして処理される場合は、キーがそれ自体とは異なるグループに行が配置されることがあります。  
  
この関数は、返される行の順序を保証していません。


## Examples

### Example #1
テーブルをグループ化し、価格の合計 ("each List.Sum(\[price\])") を含む集計列 \[total\] を追加します。
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
