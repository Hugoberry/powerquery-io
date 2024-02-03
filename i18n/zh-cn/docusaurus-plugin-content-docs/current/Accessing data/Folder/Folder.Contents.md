---
title: Folder.Contents
---

# Folder.Contents


## Description

返回一个表，其中包含在指定文件夹中找到的文件和文件夹的属性和内容。


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

返回一个表，其中包含在文件夹 <code>path</code> 中找到的每个文件夹和文件的一行。每行都包含文件夹或文件的属性以及指向其内容的链接。<code>options</code> 参数当前仅供内部使用。



## Category
Accessing data
