---
title: Hdfs.Files
---

# Hdfs.Files


Hadoop ファイル システムの、指定されたフォルダーおよびサブフォルダー内にあるファイルのプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Hadoop ファイル システムの、フォルダー URL <code>url</code> およびサブフォルダーにあるファイルごとの行を含むテーブルを返します。各行には、ファイルのプロパティと、そのコンテンツへのリンクが含まれます。



## Category
Accessing data
