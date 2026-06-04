---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Повертає комплекти звітів в Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Повертає таблицю багатовимірних пакетів з Adobe Analyics. Можна вказати додатковий параметр запису "`options`", щоб керувати такими параметрами:

-   `HierarchicalNavigation` : Параметр із логічним значенням (true або false), що визначає, чи потрібно під час перегляду групувати таблиці за іменами схем (стандартне значення – false).
-   `MaxRetryCount` : Кількість повторних спроб отримати результати для запиту опитування. Стандартне значення: 120.
-   `RetryInterval` : Тривалість інтервалу між повторними спробами. Стандартне значення: 1 секунда.
-   `Implementation` : Визначає версію інтерфейсу API Adobe Analytics. Припустимі значення: "2.0". За замовчуванням використовується API версії 1.4



## Category
Accessing data
