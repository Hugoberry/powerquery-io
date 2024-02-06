---
title: Folder.Files
---

# Folder.Files


Returns a table containing the properties and contents of the files found in the specified folder and subfolders.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Returns a table containing a row for each file found in the folder <code>path</code> and all its subfolders. Each row contains properties of the file and a link to its content. The <code>options</code> parameter is currently intended for internal use only.



## Category
Accessing data
