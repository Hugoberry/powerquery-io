---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Імпорт даних із Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Повертає таблицю з Hive LLAP, указану в `базі даних` на `сервері` Hive LLAP за вибраним `протоколом`. Разом із сервером можна додатково вказати порт, відділивши його двокрапкою. Протокол Thrift Transport – це тип даних "перелік" зі значеннями "Standard", "HTTP". Ви можете вказати необов’язкові `значення`, щоб визначити такі параметри:

-   `ConnectionTimeout`: тривалість очікування до відхилення спроби встановити з’єднання із сервером. Стандартне значення залежить від драйвера.
-   `CommandTimeout`: тривалість виконання запиту сервера до його скасування. Стандартне значення залежить від драйвера.

Значенняч `параметра` указано так: \[параметр1 = значення1, параметр2 = значення2...\].


