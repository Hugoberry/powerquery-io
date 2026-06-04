---
title: HdInsight.Contents
---

# HdInsight.Contents


Повертає навігаційну таблицю, яка містить контейнери, знайдені в указаному обліковому записі зі сховища Azure.


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Remarks

Повертає навігаційну таблицю, яка містить рядок для кожного контейнера, знайденого за URL-адресою облікового запису, `account`, зі сховища Azure. Кожен рядок містить посилання на BLOB-об’єкти контейнера.



## Category
Accessing data
