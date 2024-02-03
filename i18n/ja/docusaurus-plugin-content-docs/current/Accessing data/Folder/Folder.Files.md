---
title: Folder.Files
---

# Folder.Files


## Description

指定されたフォルダーおよびサブフォルダー内にあるファイルのプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

フォルダー <code>path</code> とその全てのサブフォルダーにあるファイルごとの行を含むテーブルを返します。各行には、ファイルのプロパティと、そのコンテンツへのリンクが含まれます。 パラメーター <code>options</code> は現在、内部使用のみを目的としています。



## Category
Accessing data
