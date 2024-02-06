---
title: Folder.Files
---

# Folder.Files


傳回表格，內含在指定的資料夾和子資料夾中找到的檔案的屬性和內容。


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

傳回表格，內含在資料夾 <code>path</code> 和所有子資料夾中找到的每個檔案各一列。每一列包含檔案的屬性，以及其內容的連結。<code>options</code> 參數目前僅供內部使用。



## Category
Accessing data
