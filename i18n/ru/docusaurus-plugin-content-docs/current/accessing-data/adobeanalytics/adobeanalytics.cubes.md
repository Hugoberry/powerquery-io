---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Возвращает наборы отчетов в Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Возвращает таблицу многомерных пакетов из Adobe Analytics. Может быть указан необязательный параметр записи `options` для управления следующими параметрами:

-   `HierarchicalNavigation` : Логическое значение (True или False), которое указывает, следует ли просматривать таблицы, сгруппированные по именам схем. Значение по умолчанию — False.
-   `MaxRetryCount` : Число повторных попыток при опросе результатов запроса. Значение по умолчанию — 120.
-   `RetryInterval` : Период времени между повторными попытками. Значение по умолчанию — 1 секунда.
-   `Implementation` : Указывает версию API Adobe Analytics. Допустимые значения: "2.0". По умолчанию используется API версии 1.4.



## Category
Accessing data
