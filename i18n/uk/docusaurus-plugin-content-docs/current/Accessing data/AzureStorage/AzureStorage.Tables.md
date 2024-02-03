---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Повернення навігаційної таблиці, яка містить таблиці, знайдені за вказаним обліковим записом у сховищі Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Повертає навігаційну таблицю, яка містить окремі рядки для всіх таблиць за URL-адресою облікового запису <code>account</code>, зі сховища Azure. У кожному рядку наводиться посилання на таблицю Azure. Необов’язковий параметр <code>options</code> дає змогу вказати додаткові властивості. Запис може містити такі поля:    <ul><li><code>Timeout</code> : Дає змогу контролювати тривалість очікування на виконання запиту до сервера, після досягнення якої спроба переривається. Стандартне значення залежить від джерела.</li></ul>



## Category
Accessing data
