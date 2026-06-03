---
title: Csv.Document
---

# Csv.Document


テーブルとして CSV ドキュメントのコンテンツを返します。


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

テーブルとして CSV ドキュメントのコンテンツを返します。

-   `columns` には、null 値、列数、列名の一覧、テーブル型、またはオプション レコードを指定できます。
-   `delimiter` には、1 つの文字、文字のリスト、または値 `""` を指定できます。これは、行を連続する空白文字で分割する必要があることを示しています。既定値: `","`。
-   `extraValues` のサポートされている値については、`ExtraValues.Type` を参照してください。
-   `encoding` には、テキストのエンコードの種類を指定します。

`columns` にレコードが指定されている場合 (および `delimiter`、`extraValues`、`encoding` が null 値の場合)、次のレコード フィールドが指定される場合があります。

-   `Delimiter`: 1 つの文字の列区切り記号。既定値: `","`。
-   `Columns`: null 値、列数、列名の一覧、テーブルの種類を指定できます。この列数が入力にある列数よりも小さい場合、余分の列は無視されます。列数が入力にある列数よりも大きい場合、余分の列は null 値になります。指定しない場合、列数は入力にある列数によって判断されます。
-   `Encoding`: ファイルのテキスト エンコード。既定値: 65001 (UTF-8)。
-   `CsvStyle`: 引用符の処理方法を指定します。
    -   `CsvStyle.QuoteAfterDelimiter` (既定値): フィールド内の引用符は区切り記号の直後の場合にのみ意味を持ちます。
    -   `CsvStyle.QuoteAlways`: フィールド内の引用符は、表示場所に関係なく常に重要です。
-   `QuoteStyle`: 引用符で囲まれた改行の処理方法を指定します。
    -   `QuoteStyle.Csv` (既定値): 引用符で囲まれた改行は、現在の行の末尾としてではなく、データの一部として扱われます。
    -   `QuoteStyle.None`: すべての改行は、引用符で囲まれた値の内部にある場合でも、現在の行の末尾として扱われます。
-   `IncludeByteOrderMark`: CSV 出力の先頭にバイト オーダー マーク (BOM) を含めるかどうかを示す論理値。true に設定すると、BOM が書き込まれます (例: UTF-8 BOM: `0xEF 0xBB 0xBF`)。false に設定すると、BOM は含まれません。このオプションは、出力シナリオでのみ適用できます。既定値は `false` です。
-   `ExtraValues`: ExtraValues のサポートされている値については`ExtraValues.Type` を参照してください。


## Examples

### Example #1
列見出しを含む CSV テキストを処理します。
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
