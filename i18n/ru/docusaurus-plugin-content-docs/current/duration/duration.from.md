---
title: Duration.From
---

# Duration.From


Создает длительность из заданного значения.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Возвращает значение длительности из заданного значения.

-   `value`: значение, от которого получена длительность. Если параметр `value` равен `null`, эта функция возвращает `null`. Если параметр `value` равен `duration`, возвращается `value`. Значения следующих типов можно преобразовать в значение `duration`:
    -   `text`: значение `duration` из текстовых форм прошедшего времени (d.h:m:s). Подробности см. в разделе `Duration.FromText`.
    -   `number`: значение `duration`, эквивалентное количеству целых и неполных дней, выраженное `value`.

Если `value` имеет любой другой тип, возвращается ошибка.


## Examples

### Example #1
Преобразование `2.525` в значение `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Преобразование текстового значения `"2.05:55:20.34567"` в значение `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
