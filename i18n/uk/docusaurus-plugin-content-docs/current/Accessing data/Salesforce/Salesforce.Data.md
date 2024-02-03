---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Повертає об’єкти з облікового запису Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Повертає об’єкти з облікового запису Salesforce, визначеного в облікових даних. Обліковий запис буде підключено через указане середовище <code>loginUrl</code>. Якщо середовище не вказано, обліковий запис підключиться до робочого середовища (https://login.salesforce.com). Можна вказати додатковий параметр запису <code>options</code>, щоб визначити додаткові властивості. Запис може містити описані нижче поля.    <ul><li><code>CreateNavigationProperties</code> : Параметр із логічним значенням (true або false), що визначає, чи потрібно генерувати властивості навігації для значень, що повертаються (стандартне значення&#160;– false).</li><li><code>ApiVersion</code> : Версія API Salesforce, яку потрібно використовувати для цього запиту. Якщо значення не вказано, використовується API версії 29.0.</li><li><code>Timeout</code> : Дає змогу контролювати тривалість очікування на виконання запиту до сервера, після досягнення якої спроба переривається. Стандартне значення залежить від джерела.</li></ul>    



## Category
Accessing data
