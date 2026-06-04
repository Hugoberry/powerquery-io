---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Повертає з файлової системи Azure Data Lake Storage вміст указаного файлу.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Повертає вміст файлу за URL-адресою, `url`, з файлової системи Azure Data Lake Storage. Ви можете вказати `options` для керування такими параметрами:

-   `BlockSize` : Кількість байтів, які потрібно зчитати, перш ніж очікувати на споживача даних. Стандартне значення – 4 МБ.
-   `RequestSize` : Кількість байтів, яку потрібно спробувати зчитати в одному запиті HTTP на сервері. Стандартне значення – 4 МБ.
-   `ConcurrentRequests` : Параметр ConcurrentRequests підтримує швидке завантаження даних за допомогою зазначення кількості запитів, які потрібно виконати паралельно, з використанням пам’яті. Потрібна пам’ять розраховується за формулою (ConcurrentRequest \* RequestSize). Стандартне значення – 16.



## Category
Accessing data
