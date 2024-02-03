---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Повертає навігаційну таблицю, яка містить документи Azure Data Lake Storage, знайдені в указаному контейнері та його вкладених папках.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Повертає навігаційну таблицю, яка містить документи файлової системи Azure Data Lake Storage, знайдені в указаному контейнері та відповідних вкладених папках облікового запису за URL-адресою <code>endpoint</code>. Ви можете вказати <code>options</code> для керування такими параметрами:    <ul><li><code>BlockSize</code> : Кількість байтів, які потрібно зчитати, перш ніж очікувати на споживача даних. Стандартне значення – 4 МБ.</li><li><code>RequestSize</code> : Кількість байтів, яку потрібно спробувати зчитати в одному запиті HTTP на сервері. Стандартне значення – 4 МБ.</li><li><code>ConcurrentRequests</code> : Параметр ConcurrentRequests підтримує швидке завантаження даних за допомогою зазначення кількості запитів, які потрібно виконати паралельно, з використанням пам’яті. Потрібна пам’ять розраховується за формулою (ConcurrentRequest \* RequestSize). Стандартне значення – 16.</li><li><code>HierarchicalNavigation</code> : Логічний тип (true/false), який керує відображенням файлів у поданні деревовидних каталогів або в неструктурованому списку. Стандартне значення – false.</li></ul>



## Category
Accessing data
