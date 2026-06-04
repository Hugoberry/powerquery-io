---
title: DataLake.Files
---

# DataLake.Files


Введіть URL-адресу свого облікового запису Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю, яка містить окремий рядок для кожного файлу, розташованого за `URL`\-адресою в Azure Data Lake Storage Gen1. Кожен рядок містить властивості файлу й посилання на його вміст.


