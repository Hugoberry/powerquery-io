---
title: Folder.Files
---

# Folder.Files


傳回表格，內含在指定的資料夾和子資料夾中找到的檔案的屬性和內容。


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

針對在指定的資料夾及其所有子資料夾中找到的每個檔案，傳回包含一個資料列的資料表。

-   `path`: 您要從中擷取檔案的資料夾路徑。提供的資料夾路徑必須是有效的絕對路徑。
-   `options`: (選擇性) 此參數目前僅供內部使用。

所傳回資料表的每一列都包含檔案的屬性及其內容的連結。


## Examples

### Example #1
傳回包含在 C:\\test-examples\\example-folder 及其所有子資料夾中找到的所有檔案之資料表。
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
