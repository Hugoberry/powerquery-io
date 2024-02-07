---
title: DataLake.Files
---

# DataLake.Files


Azure Data Lake Storage アカウントの URL を入力します。


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage Gen1 の <code>url</code> にあるファイルごとの行を含むテーブルを返します。各行には、ファイルのプロパティと、そのコンテンツへのリンクが含まれます。


