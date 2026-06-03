---
title: Folder.Files
---

# Folder.Files


返回一个表，它包含在指定文件夹和子文件夹中找到的文件的属性和内容。


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

返回一个表，其中包含在指定文件夹及其所有子文件夹中找到的每个文件对应的一行内容。

-   `path`: 要从中检索文件的文件夹的路径。提供的文件夹路径必须为有效的绝对路径。
-   `options`: (可选)此参数当前仅供内部使用。

返回的表的每一行都包含文件的属性和一个指向其内容的链接。


## Examples

### Example #1
返回一个表，其中包含在 C:\\test-examples\\example-folder 及其所有子文件夹中找到的所有文件。
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
