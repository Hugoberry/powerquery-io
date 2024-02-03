---
title: Text.Format
---

# Text.Format


## Description

Пішімделген мәтінді пішім жолынан және аргументтерден қайтарады.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Тізімнен немесе жазбадан <code>formatString</code> пішім жолына <code>arguments</code> қолдану арқылы жасалған пішімделген мәтінді қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
Сандар тізімін пішімдеңіз.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
АҚШ ағылшын мәдениетіне сәйкес жазбадағы түрлі деректер түрлерін пішімдеңіз.
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
