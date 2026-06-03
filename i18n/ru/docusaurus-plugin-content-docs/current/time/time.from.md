---
title: Time.From
---

# Time.From


Создает значение времени из заданного значения.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Возвращает значение `time`, полученное из предоставленного значения `value`. Также можно указать необязательный параметр `culture` (например, "ru-RU"). Если данное `value` равно `NULL`, то `Time.From` возвращает `NULL`. Если данное `value` представляет собой `time`, то `value` и будет возвращено. Преобразовать в `time` можно значения следующих типов:

-   `text`. Значение `time` берется из текстового представления. Подробнее см. `Time.FromText`.
-   `datetime`. Будет использован компонент времени из `value`.
-   `datetimezone`. Будет взят компонент времени из datetime-эквивалента `value` по местному времени.
-   `number`. Значение `time` будет эквивалентно доле дня (дроби), выражаемой `value`. Если значение `value` отрицательное либо равно единице или выше, возвращается ошибка.

Если `value` имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1
Преобразовать `0.7575` в значение `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Преобразовать `#datetime(1899, 12, 30, 06, 45, 12)` в значение `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
