---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Returns a table containing the properties and contents of the files found in the specified folder and subfolders from a Hadoop file system.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Returns a table containing a row for each file found at the folder URL, <code>url</code>, and subfolders from a Hadoop file system. Each row contains properties of the file and a link to its content.



## Category
Accessing data
