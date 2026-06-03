---
title: Number.From
---

# Number.From


Создает число из заданного значения.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение `number`, полученное из предоставленного значения `value`. При необходимости можно также указать `culture` (например, "ru-RU"). Если данное `value` равно `NULL`, то `Number.From` возвращает `NULL`. Если данное `value` представляет собой `number`, то `value` и возвращается. Преобразовать в `number` можно значения следующих типов:

-   `text`. Значение `number` берется из текстового представления. Поддерживаются стандартные текстовые форматы ("15", "3,423.10", "5.0E-10"). Подробнее см. `Number.FromText`.
-   `logical`. Значение равно 1 для `true` (истина) или 0 для `false` (ложь).
-   `datetime`. Будет получено число двойной точности с плавающей запятой, содержащее эквивалент даты OLE Automation.
-   `datetimezone`. Будет получено число двойной точности с плавающей запятой, содержащее дату OLE Automation, эквивалентную дате и местному времени из значения `value`.
-   `date`. Будет получено число двойной точности с плавающей запятой, содержащее эквивалент даты OLE Automation.
-   `time`. Выражение числа дней в дробной форме.
-   `duration`. Выражение числа дней в целой и дробной форме.

Если `value` имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1
Получить значение `number` для `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Получить значение `number` для `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Получает значение `number` для `"12.3 %"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
