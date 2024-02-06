---
title: Hdfs.Contents
---

# Hdfs.Contents


返回一个表，它包含在 Hadoop 文件系统的指定文件夹中找到的文件和文件夹的属性和内容。


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

返回一个表，它包含在 Hadoop 文件系统的文件夹 URL <code>url</code> 上找到的每个文件夹和文件所对应的行。每一行都包含所对应的文件夹或文件的属性以及指向其内容的链接。



## Category
Accessing data
