---
title: Folder.Contents
---

# Folder.Contents


指定されたフォルダー内にあるファイルおよびフォルダーのプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

フォルダー `path` にあるフォルダーおよびファイルごとの行を含むテーブルを返します。各行には、フォルダーまたはファイルのプロパティと、そのコンテンツへのリンクが含まれます。 パラメーター `options` は現在、内部使用のみを目的としています。



## Category
Accessing data
