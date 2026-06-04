---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Імпорт даних з HDInsight Interactive Query.


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Повертає список таблиць з HDInsight Interactive Query, указаних у базі даних `database` на сервері HDInsight Interactive Query `server`. Разом із сервером можна додатково вказати номер порту, відділивши його двокрапкою. Можна вказати додатковий параметр `options`, щоб керувати наведеними нижче параметрами.

-   `ConnectionTimeout`: параметр тривалості, який визначає, як довго очікувати на підключення до сервера, перш ніж перервати спробу. Стандартне значення залежить від драйвера.
-   `CommandTimeout`: параметр тривалості, який визначає, як довго запиту на боці сервера дозволено працювати до скасування. Стандартне значення залежить від драйвера.

Параметр `options` указується, наприклад, так: \[парметр1 = значення1, параметр2 = значення2…\].


