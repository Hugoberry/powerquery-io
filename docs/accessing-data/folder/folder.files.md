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

Returns a table containing a row for each file found in the specified folder and all its subfolders.

-   `path`: The path to the folder you want to retrieve the files from. The supplied folder path must be a valid absolute path.
-   `options`: (Optional) This parameter is currently intended for internal use only.

Each row of the returned table contains properties of the file and a link to its content.


## Examples

### Example #1
Return a table containing all of the files found in C:\\test-examples\\example-folder and all of its subfolders.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
