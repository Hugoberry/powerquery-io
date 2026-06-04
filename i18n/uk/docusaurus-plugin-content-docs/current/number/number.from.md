---
title: Number.From
---

# Number.From


Створює число від заданого значення.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Повертає значення `number` із заданого параметра `value`. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA"). Якщо заданий параметр `value` має значення `null`, функція `Number.From` повертає `null`. Якщо заданий параметр `value` має значення `number`, повертається `value`. Значення таких типів можна перетворити на значення `number`:

-   `text`: значення `number` з текстового представлення. Обробляються типові текстові формати ("15", "3423,10", "5,0E-10"). Див. опис функції `Number.FromText`, щоб дізнатися більше.
-   `logical`: 1 – `true`, 0 – `false`.
-   `datetime`: число подвійної точності з рухомою комою, що містить еквівалент дати автоматизації OLE.
-   `datetimezone`: число подвійної точності з рухомою комою, яке містить еквівалент дати автоматизації OLE місцевих дати й часу параметра `value`.
-   `date`: число подвійної точності з рухомою комою, що містить еквівалент дати автоматизації OLE.
-   `time`: виражається в неповних днях.
-   `duration`: виражається в повних і неповних днях.

Якщо параметр `value` має інше значення, повертається помилка.


## Examples

### Example #1
Отримати `number` значення `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Отримати `number` значення `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Отримати значення типу `number` зі значення `"12,3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
