---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Повертає звіти з облікового запису Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Повертає звіти з облікового запису Salesforce, визначеного в облікових даних. Обліковий запис буде підключено через указане середовище <code>loginUrl</code>. Якщо середовище не вказано, обліковий запис підключиться до робочого середовища (https://login.salesforce.com). Можна вказати додатковий параметр запису <code>options</code>, щоб визначити додаткові властивості. Запис може містити описані нижче поля.    <ul><li><code>ApiVersion</code> : Версія API Salesforce, яку потрібно використовувати для цього запиту. Якщо значення не вказано, використовується API версії 29.0.</li><li><code>Timeout</code> : Дає змогу контролювати тривалість очікування на виконання запиту до сервера, після досягнення якої спроба переривається. Стандартне значення залежить від джерела.</li></ul>    



## Category
Accessing data
