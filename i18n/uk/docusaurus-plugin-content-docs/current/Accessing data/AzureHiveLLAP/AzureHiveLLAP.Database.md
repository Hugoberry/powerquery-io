---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Імпорт даних з HDInsight Interactive Query.


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Повертає список таблиць з HDInsight Interactive Query, указаних у базі даних <code>database</code> на сервері HDInsight Interactive Query <code>server</code>. Разом із сервером можна додатково вказати номер порту, відділивши його двокрапкою. Можна вказати додатковий параметр <code>options</code>, щоб керувати наведеними нижче параметрами.<ul>        <li><code>ConnectionTimeout</code>: параметр тривалості, який визначає, як довго очікувати на підключення до сервера, перш ніж перервати спробу. Стандартне значення залежить від драйвера.</li>        <li><code>CommandTimeout</code>: параметр тривалості, який визначає, як довго запиту на боці сервера дозволено працювати до скасування. Стандартне значення залежить від драйвера.</li></ul>Параметр <code>options</code> указується, наприклад, так: [парметр1 = значення1, параметр2 = значення2…].


