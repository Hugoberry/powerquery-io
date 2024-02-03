---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Azure ストレージ資格情報コンテナーの指定されたコンテナー内にある BLOB のプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Azure ストレージ資格情報コンテナーのコンテナー URL <code>account</code> で見つかった各 BLOB ファイルの行を含むテーブルを返します。各行には、ファイルのプロパティとそのコンテンツへのリンクが含まれます。



## Category
Accessing data
