---
title: Smartsheet.Query
---

# Smartsheet.Query


Повертає результат формату JSON з інтерфейсу API SmartSheet.


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Викликає REST API Smartsheet 2.0 у зазначеній кінцевій точці й повертає результати як запис у форматі JSON.


## Examples

### Example #1
Отримує дані з аркушів кінцевої точки SmartSheet API із зазначенням додаткових аргументів.
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Таблиця з інформацією про аркуші, яку повернув інтерфейс SmartSheet API
```



