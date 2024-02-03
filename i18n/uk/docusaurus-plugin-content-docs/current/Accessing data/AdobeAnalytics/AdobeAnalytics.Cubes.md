---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Повертає комплекти звітів в Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Повертає таблицю багатовимірних пакетів з Adobe Analyics. Можна вказати додатковий параметр запису "<code>options</code>", щоб керувати такими параметрами:    <ul><li><code>HierarchicalNavigation</code> : Параметр із логічним значенням (true або false), що визначає, чи потрібно під час перегляду групувати таблиці за іменами схем (стандартне значення&#160;– false).</li><li><code>MaxRetryCount</code> : Кількість повторних спроб отримати результати для запиту опитування. Стандартне значення: 120.</li><li><code>RetryInterval</code> : Тривалість інтервалу між повторними спробами. Стандартне значення: 1&#160;секунда.</li><li><code>Implementation</code> : Визначає версію інтерфейсу API Adobe Analytics. Припустимі значення: &quot;2.0&quot;. За замовчуванням використовується API версії 1.4</li></ul>    



## Category
Accessing data
