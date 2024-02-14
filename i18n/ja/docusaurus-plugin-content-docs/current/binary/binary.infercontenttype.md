---
title: Binary.InferContentType
---

# Binary.InferContentType


バイナリ ストリームを読み取り、ストリームのコンテンツの種類と形式の情報を確認しようとしています。


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Content.Type フィールドに推定された MIME の種類を含むレコードを返します。    推定されたコンテンツの種類が text/\* であり、エンコードのコード ページが検出された場合は、ストリームのエンコードを含む Content.Encoding フィールドを追加で返します。    推定されたコンテンツの種類が text/csv であり、形式が区切り記号で区切られている場合は、可能性のある区切り記号を分析したテーブルを含む Csv.PotentialDelimiter フィールドを追加で返します。    推定されたコンテンツの種類が text/csv であり、形式が固定幅の場合は、可能性のある固定幅の列位置を分析したリストを含む Csv.PotentialPositions フィールドを追加で返します。



## Category
Binary
