---
title: DateTime.From
---

# DateTime.From


Створює дату й час із заданого значення.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Повертає значення `datetime` із заданого параметра `value`. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA"). Якщо заданий параметр `value` має значення `null`, функція `DateTime.From` повертає `null`. Якщо заданий параметр `value` має значення `datetime`, повертається `value`. Значення таких типів можна перетворити на значення `datetime`:

-   `text`: значення `datetime` із текстового представлення. Див. опис функції `DateTime.FromText`, щоб дізнатися більше.
-   `date`: значення `datetime` з `value` як компонентом дати й`12:00:00 AM` як компонентом часу.
-   `datetimezone`: місцевий еквівалент значення `datetime` параметра `value`.
-   `time`: значення `datetime` з еквівалентом дати автоматизації OLE `0` як компонентом дати й `value` як компонентом часу.
-   `number`: еквівалент значення `datetime` дати автоматизації OLE, виражений параметром `value`.

Якщо параметр `value` має інше значення, повертається помилка.


## Examples

### Example #1
Перетворити `#time(06, 45, 12)` на значення `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Перетворити `#date(1975, 4, 4)` на значення `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
