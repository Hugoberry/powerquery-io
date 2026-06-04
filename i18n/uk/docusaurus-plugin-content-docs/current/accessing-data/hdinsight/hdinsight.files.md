---
title: HdInsight.Files
---

# HdInsight.Files


Повертає навігаційну таблицю, яка містить властивості та вміст BLOB-об’єктів, знайдених у вказаному контейнері зі сховища Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Повертає таблицю, яка містить рядок для кожного файлу BLOB-об’єкта, знайденого за URL-адресою контейнера, `account`, зі сховища Azure. Кожен рядок містить властивості файлу та посилання на його вміст.



## Category
Accessing data
