---
title: Pdf.Tables
---

# Pdf.Tables


PDF ファイル内で見つかったテーブルを返します。


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

`pdf` で見つかったテーブルを返します。省略可能なレコード パラメーター `options` を指定して、追加のプロパティを指定できます。レコードには、次のフィールドを含めることができます:

-   `Implementation` : テーブルを識別するときに使用するアルゴリズムのバージョンです。古いバージョンは、以前のクエリがアルゴリズムの更新によって使用できなくなることを防ぐための下位互換性のためだけに使用できます。最新バージョンでは、常に最適な結果が得られます。有効な値は、"1.3"、"1.2"、"1.1"、または null です。
-   `StartPage` : 検査するページ範囲の最初のページを指定します。既定値: 1。
-   `EndPage` : 検査するページ範囲の最後のページを指定します。既定値: ドキュメントの最後のページ。
-   `MultiPageTables` : 連続するページの類似するテーブルを 1 つのテーブルに自動的に結合するかどうかを制御します。既定値: true。
-   `EnforceBorderLines` : 境界線が常にセルの境界線として適用されるか (true の場合)、単にセルの境界線を決定するための多くあるうちの 1 つのヒントとして使用するかどうか (false の場合) を制御します。既定値: false。


## Examples

### Example #1
sample.pdf に含まれているテーブルを返します。
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
データにアクセスしています
