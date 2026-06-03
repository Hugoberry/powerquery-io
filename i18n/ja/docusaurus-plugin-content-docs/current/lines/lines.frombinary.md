---
title: Lines.FromBinary
---

# Lines.FromBinary


バイナリ値を、改行で分割されたテキスト値のリストに変換します。引用符のスタイルで指定すると、改行は引用符で囲まれて表示されることがあります。includeLineSeparators が true の場合、改行文字はテキストに含まれます。


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

バイナリ値を改行で分割されたテキスト値のリストに変換します。

-   `binary`: リストに変換するバイナリ値。
-   `quoteStyle`: 改行の処理方法を指定します。`quoteStyle` の値は、`null` にすることができます。既定値は `QuoteStyle.None` です。
-   `includeLineSeparators`: 改行文字をテキストに含めるかどうかを指定します。`includeLineSeparators` の値は、`null` にすることができます。既定値は `false` です。
-   `encoding`: バイナリ値のテキスト エンコードを指定します。`encoding` の値は、`null` にすることができます。既定値は `65001` (UTF-8) です。

レコードが `quoteStyle` に指定されている場合 (および `includeLineSeparators` と `encoding` が`null` の場合)、次のレコード フィールドを指定できます。

-   `QuoteStyle`: 引用符で囲まれた改行の処理方法を指定します。
    -   `QuoteStyle.Csv`: 引用符で囲まれた改行は、現在の行の末尾としてではなく、データの一部として扱われます。
    -   `QuoteStyle.None`: すべての改行は、引用符で囲まれた値の内部にある場合でも、現在の行の末尾として扱われます。この値は、`CsvStyle` オプションが指定されていない場合の既定値です。
-   `CsvStyle`: 引用符の処理方法を指定します。`QuoteStyle.None` と一緒に使用しないでください。
    -   `CsvStyle.QuoteAfterDelimiter`: フィールド内の引用符は、`Delimiter` の直後にのみ重要です。
    -   `CsvStyle.QuoteAlways`: フィールド内の引用符は、表示場所に関係なく常に重要です。
-   `Delimiter`: 1 つの文字の区切り記号。`CsvStyle.QuoteAfterDelimiter` とのみ使用してください。
-   `IncludeLineSeparators`: テキストに改行文字を含めるかどうかを指定します。既定値は `false` です。
-   `Encoding`: バイナリ値のテキスト エンコード。既定値は `65001` (UTF-8) です。



## Category
Lines
