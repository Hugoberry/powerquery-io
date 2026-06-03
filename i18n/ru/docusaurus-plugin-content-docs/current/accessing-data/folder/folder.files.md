---
title: Folder.Files
---

# Folder.Files


Возвращает таблицу, содержащую свойства и содержимое файлов и папок, найденных в указанной папке и вложенных папках.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу, содержащую по строке для каждого файла, найденного в указанной папке и всех её подкаталогах.

-   `path`: путь к папке, из которой нужно получить файлы. Предоставленный путь к папке должен быть действительным абсолютным путем.
-   `options`: (необязательно) этот параметр сейчас предназначен только для внутреннего использования.

Каждая строка возвращаемой таблицы содержит свойства файла и ссылку на его содержимое.


## Examples

### Example #1
Вернуть таблицу, содержащую все файлы, найденные в папке C:\\test-examples\\example-folder и всех ее подпапках.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
