---
title: Folder.Contents
---

# Folder.Contents


Returns a table containing the properties and contents of the files and folders found in the specified folder.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Returns a table containing a row for each folder and file found in the folder <code>path</code>. Each row contains properties of the folder or file and a link to its content. The <code>options</code> parameter is currently intended for internal use only.



## Category
Accessing data
