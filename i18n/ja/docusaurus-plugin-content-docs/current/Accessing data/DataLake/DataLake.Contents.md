---
title: DataLake.Contents
---

# DataLake.Contents


Azure Data Lake Storage Gen1 アカウントの URL を入力します。


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage Gen1 の <code>url</code> にあるフォルダーおよびファイルごとの行を含むテーブルを返します。各行には、フォルダーまたはファイルのプロパティと、そのコンテンツへのリンクが含まれます。


