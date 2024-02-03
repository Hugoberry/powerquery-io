---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Повертає вміст указаного BLOB-об’єкта зі сховища Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Повертає вміст BLOB-об'єкта в URL-адресі, <code>url</code>, зі сховища Azure. Ви можете вказати <code>options</code> для керування такими параметрами:    <ul><li><code>BlockSize</code> : Кількість байтів, які потрібно зчитати, перш ніж очікувати на споживача даних. Стандартне значення – 4 МБ.</li><li><code>RequestSize</code> : Кількість байтів, яку потрібно спробувати зчитати в одному запиті HTTP на сервері. Стандартне значення – 4 МБ.</li><li><code>ConcurrentRequests</code> : Параметр ConcurrentRequests підтримує швидке завантаження даних за допомогою зазначення кількості запитів, які потрібно виконати паралельно, з використанням пам’яті. Потрібна пам’ять розраховується за формулою (ConcurrentRequest \* RequestSize). Стандартне значення – 16.</li></ul>



## Category
Accessing data
