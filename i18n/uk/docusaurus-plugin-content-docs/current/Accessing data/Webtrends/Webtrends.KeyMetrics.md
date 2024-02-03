---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Повертає таблицю з ключовими показниками Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Викликає кінцеву точку ресурсу Webtrends KeyMetrics і повертає всі дані у вигляді таблиці.


## Examples

### Example #1 
Отримує таблицю ключових показників для клієнта 98765 за останні 30 днів.
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Таблиця ключових показників
```



