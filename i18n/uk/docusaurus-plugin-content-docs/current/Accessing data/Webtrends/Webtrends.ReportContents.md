---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Повертає таблицю з вмістом звіту з ресурсу Webtrends.


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

Викликає задану кінцеву точку звітування Webtrends і повертає всі дані у вигляді таблиці.


## Examples

### Example #1 
Викликає кінцеву точку звіту Webtrends про відвідувачів, щоб отримати дані за останні 30 днів.
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Таблиця з даними про відвідувачів
```



