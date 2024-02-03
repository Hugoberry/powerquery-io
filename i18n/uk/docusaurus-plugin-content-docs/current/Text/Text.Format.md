---
title: Text.Format
---

# Text.Format


## Description

Повертає форматований текст від рядка формату та аргументів.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Повертає форматований текст, створений за допомогою застосування параметра <code>arguments</code> зі списку або запису до рядка формату <code>formatString</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Форматування списку чисел.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Форматування різних типів даних із запису відповідно до англійської мови та регіональних параметрів Сполучені Штати.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
