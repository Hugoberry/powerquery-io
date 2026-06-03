---
title: Folder.Files
---

# Folder.Files


指定されたフォルダーおよびサブフォルダー内にあるファイルのプロパティとコンテンツを含むテーブルを返します。


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

指定したフォルダーとそのすべてのサブフォルダーにある各ファイルの行を含むテーブルを返します。

-   `path`: ファイル取得元フォルダーへのパス。指定されたフォルダー パスは、有効な絶対パスである必要があります。
-   `options`: (省略可能) このパラメーターは現在、内部使用のみを目的としています。

返されたテーブルの各行には、ファイルのプロパティとその内容へのリンクが含まれています。


## Examples

### Example #1
C:\\test-examples\\example-folder とそのすべてのサブフォルダーにあるファイルをすべて含むテーブルを返します。
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
