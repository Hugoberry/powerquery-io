---
title: DataLake.Files
---

# DataLake.Files


Введите URL-адрес учетной записи Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу, содержащую строку для каждого файла, находящегося по <code>URL-адресу</code> в Azure Data Lake Storage 1-го поколения. Каждая строка содержит свойства файла, а также ссылку на его содержимое.


