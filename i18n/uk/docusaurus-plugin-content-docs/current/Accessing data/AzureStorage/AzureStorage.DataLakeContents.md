---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Повертає з файлової системи Azure Data Lake Storage вміст указаного файлу.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Повертає вміст файлу за URL-адресою, <code>url</code>, з файлової системи Azure Data Lake Storage. Ви можете вказати <code>options</code> для керування такими параметрами:    <ul><li><code>BlockSize</code> : Кількість байтів, які потрібно зчитати, перш ніж очікувати на споживача даних. Стандартне значення – 4 МБ.</li><li><code>RequestSize</code> : Кількість байтів, яку потрібно спробувати зчитати в одному запиті HTTP на сервері. Стандартне значення – 4 МБ.</li><li><code>ConcurrentRequests</code> : Параметр ConcurrentRequests підтримує швидке завантаження даних за допомогою зазначення кількості запитів, які потрібно виконати паралельно, з використанням пам’яті. Потрібна пам’ять розраховується за формулою (ConcurrentRequest \* RequestSize). Стандартне значення – 16.</li></ul>



## Category
Accessing data
