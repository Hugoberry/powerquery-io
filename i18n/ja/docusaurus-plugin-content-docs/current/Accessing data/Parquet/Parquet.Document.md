---
title: Parquet.Document
---

# Parquet.Document


## Description

テーブルとして Parquet ドキュメントのコンテンツを返します。


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Parquet ドキュメントの内容をテーブルとして返します。オプションに含まれるのは:     <ul>    <li> <code>TypeMapping</code>: ファイルの読み取りおよび書き込み時の既定の型マッピングを制御するテキスト値があります。既定値は null で、元の型に対して可能な限り忠実性を維持しようとします。値 "Sql" を指定すると、Sql Server と最も互換性のある結果が生成されます。</li> </ul>



## Category
データにアクセスしています
