---
title: Smartsheet.Content
---

# Smartsheet.Content


Возвращает таблицу данных из конечной точки индекса Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Выполняет вызов REST API Smartsheet 2.0 в указанной конечной точке и преобразует возвращенный элемент данных в таблицу.


## Examples

### Example #1 
Извлекает таблицу сведений о пользователях из API Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Таблица со сведениями о пользователях, возвращенная API Smartsheet
```



