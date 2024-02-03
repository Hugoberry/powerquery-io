---
title: Text.Format
---

# Text.Format


## Description

Возвращает отформатированный текст из строки форматирования и аргументов.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Возвращает отформатированный текст, который создается путем применения <code>arguments</code> из списка или записи к строке форматирования <code>formatString</code>. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Форматирование списка чисел.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Форматирование разных типов данных из записи в соответствии с языком и региональными параметрами.
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
