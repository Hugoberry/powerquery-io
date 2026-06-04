---
title: DataLake.Contents
---

# DataLake.Contents


Введіть URL-адресу свого облікового запису Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю, яка містить окремий рядок для кожної папки та кожного файлу, розташованих за `URL`\-адресою в Azure Data Lake Storage Gen1. Кожен рядок містить властивості папки або файлу й посилання на відповідний вміст.


