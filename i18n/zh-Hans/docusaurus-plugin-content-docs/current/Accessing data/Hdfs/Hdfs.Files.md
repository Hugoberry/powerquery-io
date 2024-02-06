---
title: Hdfs.Files
---

# Hdfs.Files


返回一个表，它包含在 Hadoop 文件系统的指定文件夹和子文件夹中找到的文件的属性和内容。


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

返回一个表，它包含在 Hadoop 文件系统的文件夹 URL <code>url</code> 和子文件夹中找到的每个文件所对应的行。每一行都包含所对应的文件的属性以及指向其内容的链接。



## Category
Accessing data
