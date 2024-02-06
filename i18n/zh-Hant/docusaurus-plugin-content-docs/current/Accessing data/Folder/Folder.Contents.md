---
title: Folder.Contents
---

# Folder.Contents


傳回資料表，內含在指定的資料夾中找到的檔案和資料夾的屬性和內容。


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

傳回表格，內含在資料夾 <code>path</code> 中找到的每個資料夾和檔案各一列。每一列包含資料夾或檔案的屬性，以及其內容的連結。<code>options</code> 參數目前僅供內部使用。



## Category
Accessing data
