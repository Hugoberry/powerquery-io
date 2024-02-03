---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Возвращает результат JSON из API Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Выполняет вызов REST API Smartsheet 2.0 в указанной конечной точке и возвращает результаты в виде записи JSON.


## Examples

### Example #1 
Извлекает данные из листов конечной точки API Smartsheet с указанными дополнительными аргументами
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Таблица со сведениями о листах, возвращенная API Smartsheet
```



