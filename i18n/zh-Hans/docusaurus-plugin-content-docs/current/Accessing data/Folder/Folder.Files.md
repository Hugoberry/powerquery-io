---
title: Folder.Files
---

# Folder.Files


## Description

返回一个表，它包含在指定文件夹和子文件夹中找到的文件的属性和内容。


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

返回一个表，其中包含在文件夹 <code>path</code> 及其所有子文件夹中找到的每个文件的一行。每行都包含文件的属性和指向其内容的链接。<code>options</code> 参数当前仅供内部使用。



## Category
Accessing data
