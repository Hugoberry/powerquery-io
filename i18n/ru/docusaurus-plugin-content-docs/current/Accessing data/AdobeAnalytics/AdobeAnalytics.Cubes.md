---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Возвращает наборы отчетов в Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Возвращает таблицу многомерных пакетов из Adobe Analytics. Может быть указан необязательный параметр записи <code>options</code> для управления следующими параметрами:    <ul><li><code>HierarchicalNavigation</code> : Логическое значение (True или False), которое указывает, следует ли просматривать таблицы, сгруппированные по именам схем. Значение по умолчанию&#160;— False.</li><li><code>MaxRetryCount</code> : Число повторных попыток при опросе результатов запроса. Значение по умолчанию&#160;— 120.</li><li><code>RetryInterval</code> : Период времени между повторными попытками. Значение по умолчанию&#160;— 1&#160;секунда.</li><li><code>Implementation</code> : Указывает версию API Adobe Analytics. Допустимые значения: &quot;2.0&quot;. По умолчанию используется API версии 1.4.</li></ul>    



## Category
Accessing data
