---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Повертає навігаційну таблицю, яка містить контейнери, знайдені в указаному обліковому записі зі сховища Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Повертає навігаційну таблицю, яка містить рядок для кожного контейнера, знайденого за URL-адресою облікового запису, <code>account</code>, зі сховища Azure. Кожен рядок містить посилання на BLOB-об’єкти контейнера. Ви можете вказати <code>options</code> для керування такими параметрами:    <ul><li><code>BlockSize</code> : Кількість байтів, які потрібно зчитати, перш ніж очікувати на споживача даних. Стандартне значення – 4 МБ.</li><li><code>RequestSize</code> : Кількість байтів, яку потрібно спробувати зчитати в одному запиті HTTP на сервері. Стандартне значення – 4 МБ.</li><li><code>ConcurrentRequests</code> : Параметр ConcurrentRequests підтримує швидке завантаження даних за допомогою зазначення кількості запитів, які потрібно виконати паралельно, з використанням пам’яті. Потрібна пам’ять розраховується за формулою (ConcurrentRequest \* RequestSize). Стандартне значення – 16.</li></ul>



## Category
Accessing data
