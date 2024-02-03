---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Повертає таблицю з Hive LLAP, указану в <code>базі даних</code> на <code>сервері</code> Hive LLAP за вибраним <code>протоколом</code>. Разом із сервером можна додатково вказати порт, відділивши його двокрапкою. Протокол Thrift Transport – це тип даних "перелік" зі значеннями "Standard", "HTTP". Ви можете вказати необов’язкові <code>значення</code>, щоб визначити такі параметри:<ul>        <li><code>ConnectionTimeout</code>: тривалість очікування до відхилення спроби встановити з’єднання із сервером. Стандартне значення залежить від драйвера.</li>        <li><code>CommandTimeout</code>: тривалість виконання запиту сервера до його скасування. Стандартне значення залежить від драйвера.</li></ul>Значенняч <code>параметра</code> указано так: [параметр1 = значення1, параметр2 = значення2...].


