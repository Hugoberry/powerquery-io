---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Повертає таблицю даних із кінцевої точки індексу Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Викликає REST API Smartsheet 2.0 у зазначеній кінцевій точці й перетворює повернену одиницю даних на таблицю.


## Examples

### Example #1 
Отримує таблицю з інформацією про користувачів з інтерфейсу Smartsheet API.
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Таблиця з інформацією про користувачів, яку повернув інтерфейс Smartsheet API
```



