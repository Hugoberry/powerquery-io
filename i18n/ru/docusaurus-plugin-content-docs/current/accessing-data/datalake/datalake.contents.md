---
title: DataLake.Contents
---

# DataLake.Contents


Введите URL-адрес учетной записи Azure Data Lake Storage 1-го поколения.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу, содержащую строку для каждой папки и каждого файла, находящихся по <code>URL-адресу</code> в Azure Data Lake Storage 1-го поколения. Каждая строка содержит свойства папки или файла, а также ссылку на их содержимое.


