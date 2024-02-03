---
title: Table.Group
---

# Table.Group


## Description

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


## Details

<code>key</code> で定義されているキー列によって <code>table</code> の行をグループ化します。<code>key</code> には、単一の列名または列名のリストを指定できます。    グループごとに、キー列 (およびその値) と、<code>aggregatedColumns</code> によって指定された集計列を含むレコードが作成されます。    必要に応じて、<code>groupKind</code> と <code>comparer</code> を指定することもできます。 <br />    <br />    データが既にキー列で並べ替えられている場合は、GroupKind.Local の <code>groupKind</code> を指定できます。これにより、特定の場合にグループ化のパフォーマンスが向上する可能性があります。    指定された一連のキー値を持つすべての行は隣接していると見なされます。<br />    <br />     <code>comparer</code> を渡すときに、異なるキーが等しいとして処理される場合は、キーがそれ自体とは異なるグループに行が配置されることがあります。<br />    <br />    この関数は、返される行の順序を保証していません。  


## Examples

### Example #1 
テーブルをグループ化し、価格の合計 (&#34;each List.Sum([price])&#34;) を含む集計列 [total] を追加します。
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
