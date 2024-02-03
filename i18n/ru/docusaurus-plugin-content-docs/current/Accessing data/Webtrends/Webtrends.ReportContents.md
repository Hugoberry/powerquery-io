---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Возвращает таблицу с содержимым отчетов из Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Вызывает указанную конечную точку отчетов Webtrends и возвращает все данные в виде таблицы.


## Examples

### Example #1 
Вызывает конечную точку отчетов посетителей Webtrends для получения данных за последние 30 дней
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Таблица данных посетителей
```



