---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Повертає вміст указаного BLOB-об’єкта зі сховища Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Повертає вміст BLOB-об'єкта в URL-адресі, `url`, зі сховища Azure. Ви можете вказати `options` для керування такими параметрами:

-   `BlockSize` : Кількість байтів, які потрібно зчитати, перш ніж очікувати на споживача даних. Стандартне значення – 4 МБ.
-   `RequestSize` : Кількість байтів, яку потрібно спробувати зчитати в одному запиті HTTP на сервері. Стандартне значення – 4 МБ.
-   `ConcurrentRequests` : Параметр ConcurrentRequests підтримує швидке завантаження даних за допомогою зазначення кількості запитів, які потрібно виконати паралельно, з використанням пам’яті. Потрібна пам’ять розраховується за формулою (ConcurrentRequest \* RequestSize). Стандартне значення – 16.



## Category
Accessing data
