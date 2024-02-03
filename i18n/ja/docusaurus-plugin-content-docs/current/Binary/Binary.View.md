---
title: Binary.View
---

# Binary.View


## Description

ユーザー定義のハンドラーを使用して、クエリおよびアクション操作用にバイナリを作成または拡張します。


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

操作がビューに適用される際に、<code>handlers</code> で指定された関数が既定動作の代わりに使用される <code>binary</code> のビューを返します。<br /><code>binary</code> が指定されると、ハンドラー関数は省略可能です。<code>binary</code> が指定されないと、<code>GetStream</code> ハンドラー関数が必要です。ハンドラー関数が操作に指定されない場合、操作の既定の動作は代わりに <code>binary</code> に適用されます (<code>GetExpression</code> の場合を除く)。<br />ハンドラー関数は、<code>binary</code> に対する操作を適用した結果 (または <code>GetExpression</code> の場合は結果ビュー) と意味的に同等の値を返す必要があります。<br />ハンドラー関数でエラーが発生する場合は、操作の既定動作がビューに適用されます。<br /><code>Binary.View</code> は、データ ソースへの圧縮の実装、M クエリからソース固有の操作への変換 (ファイルのセクションをダウンロードする場合など) に使用できます。<br /><code>Binary.View</code> の詳細な説明に関しては、公開されている Power Query カスタム コネクタのドキュメントを参照してください。<br />


## Examples

### Example #1 
長さを決定するために、データにアクセスする必要のない基本的なビューを作成します。
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
