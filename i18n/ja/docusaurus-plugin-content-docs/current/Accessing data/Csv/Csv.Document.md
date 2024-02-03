---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

CSV ドキュメントのコンテンツをテーブルとして返します。    <ul>      <li>        <code>columns</code> には null、列数、列名の一覧、テーブル タイプ、オプション レコードを指定できます。      </li>      <li>        <code>delimiter</code> には単一文字、文字の一覧、連続した空白文字で分割する必要がある行を示す値 <code>""</code> を指定できます。既定値: <code>","</code>。      </li>      <li>        <code>extraValues</code> のサポートされる値については、<code>ExtraValues.Type</code> をご覧ください。      </li>      <li>        <code>encoding</code> には、テキスト エンコードの種類を指定します。      </li>    </ul>    <code>columns</code> にレコードを指定する場合 (なおかつ <code>delimiter</code>、<code>extraValues</code>、および <code>encoding</code> が null の場合)、次のレコード フィールドを指定できます:    <ul>      <li>        <code>Delimiter</code>: 列の区切り記号。既定値: <code>","</code>。      </li>      <li>        <code>Columns</code>: null、列数、列名の一覧、テーブル タイプを指定できます。この列数が入力にある列数よりも小さい場合、余分の列は無視されます。列数が入力にある列数よりも大きい場合、余分の列は null になります。指定しないと、列数は入力にある列数によって判断されます。      </li>      <li>        <code>Encoding</code>: ファイルのテキスト エンコード。既定値: 65001 (UTF-8)。      </li>      <li>        <code>CsvStyle</code>: 引用符の処理方法を指定します。        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (既定値): フィールド内の引用符は区切り記号の直後の場合にのみ意味を持ちます。          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: フィールド内の引用府は、出現場所に関係なく常に意味を持ちます。          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: 引用符で囲まれた改行の処理方法を指定します。        <ul>          <li>            <code>QuoteStyle.Csv</code> (既定値): 引用符で囲まれた改行は、現在の行の終わりとしてではなく、データの一部として扱われます。          </li>          <li>            <code>QuoteStyle.None</code>: すべての改行は、引用符で囲まれた値内で発生する場合でも、現在の行の終わりとして扱われます。          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
列見出しを含む CSV テキストを処理します
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




## Category
Accessing data
