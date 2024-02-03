---
title: Folder.Contents
---

# Folder.Contents


## Description

指定されたフォルダー内にあるファイルおよびフォルダーのプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

フォルダー <code>path</code> にあるフォルダーおよびファイルごとの行を含むテーブルを返します。各行には、フォルダーまたはファイルのプロパティと、そのコンテンツへのリンクが含まれます。 パラメーター <code>options</code> は現在、内部使用のみを目的としています。



## Category
Accessing data
