---
title: Hdfs.Contents
---

# Hdfs.Contents


Returns a table containing the properties and contents of the files and folders found in the specified folder from a Hadoop file system.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Returns a table containing a row for each folder and file found at the folder URL, <code>url</code>, from a Hadoop file system. Each row contains properties of the folder or file and a link to its content.



## Category
Accessing data
