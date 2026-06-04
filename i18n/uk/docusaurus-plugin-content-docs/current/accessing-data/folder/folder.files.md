---
title: Folder.Files
---

# Folder.Files


Повертає таблицю, яка містить властивості та вміст файлів, знайдених у вказаній папці та вкладених папках.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю, яка містить рядок для кожного файлу, знайденого в указаній папці й всіх її підпапках.

-   `path`: шлях до папки, з якої потрібно отримати файли. Наданий шлях до папки має бути припустимим абсолютним шляхом.
-   `options`: (необовʼязково) цей параметр зараз призначений лише для внутрішнього використання.

Кожен рядок повернутої таблиці містить властивості файлу й посилання на його вміст.


## Examples

### Example #1
Поверніть таблицю, що містить усі файли, знайдені в C:\\test-examples\\example-folder і всіх її підпапках.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
