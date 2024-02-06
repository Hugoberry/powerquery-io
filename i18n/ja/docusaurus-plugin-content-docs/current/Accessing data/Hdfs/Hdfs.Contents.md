---
title: Hdfs.Contents
---

# Hdfs.Contents


Hadoop ファイル システムの、指定されたフォルダー内にあるファイルおよびフォルダーのプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Hadoop ファイル システムの、フォルダー URL <code>url</code> にあるフォルダーおよびファイルごとの行を含むテーブルを返します。各行には、フォルダーまたはファイルのプロパティと、そのコンテンツへのリンクが含まれます。



## Category
Accessing data
