---
title: Table.View
---

# Table.View


ユーザー定義のハンドラーを使用して、クエリ処理およびアクション処理用にテーブルを作成または拡張します。


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

操作がビューに適用される際に、<code>table</code> で指定された関数が既定動作の代わりに使用される <code>handlers</code> のビューを返します。<br /><code>table</code> が指定されると、ハンドラー関数は省略可能です。<code>table</code> が指定されないと、<code>GetType</code> と <code>GetRows</code> ハンドラー関数が必要です。ハンドラー関数が操作に指定されない場合、操作の既定の動作は代わりに <code>table</code> に適用されます (<code>GetExpression</code> の場合を除く)。<br />ハンドラー関数は、<code>table</code> に対する操作を適用した結果 (または <code>GetExpression</code> の場合は結果ビュー) と意味的に同等の値を返す必要があります。<br />ハンドラー関数でエラーが発生する場合は、操作の既定動作がビューに適用されます。<br /><code>Table.View</code> は、データ ソースへの圧縮の実装、M クエリからソース固有のクエリへの変換 (M クエリから T-SQL ステートメントを作成する場合など) に使用できます。<br /><code>Table.View</code> の詳細な説明に関しては、公開されている Power Query カスタム コネクタのドキュメントを参照してください。<br />


## Examples

### Example #1 
型または行数を決定するために、行にアクセスする必要のない基本的なビューを作成します。
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
