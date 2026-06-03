---
title: DateTime.From
---

# DateTime.From


Создает значение datetime из заданного значения.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Возвращает значение `datetime` из указанного параметра `value`. Также может быть указан необязательный параметр `culture` (например, "ru-RU"). Если параметр `value` имеет значение `null`, `DateTime.From` возвращает `null`. Если параметр `value` имеет значение `datetime`, возвращается `value`. Значения следующих типов можно преобразовать в значение `datetime`:

-   `text`: значение `datetime` из текстового представления. Дополнительные сведения см. в разделе `DateTime.FromText`.
-   `date`: `datetime` с `value` в качестве компонента даты и `12:00:00 AM` в качестве компонента времени.
-   `datetimezone`: `datetime`, локальный эквивалент `value`.
-   `time`: `datetime` с эквивалентом даты OLE-автоматизации, `0` в качестве компонента даты и `value` в качестве компонента времени.
-   `number`: `datetime`, эквивалент даты OLE-автоматизации, выраженный `value`.

Если `value` относится к другому типу, возвращается ошибка.


## Examples

### Example #1
Преобразовать `#time(06, 45, 12)` в значение `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Преобразовать `#date(1975, 4, 4)` в значение `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
