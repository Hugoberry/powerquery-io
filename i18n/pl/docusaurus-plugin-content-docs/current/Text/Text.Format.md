---
title: Text.Format
---

# Text.Format


## Description

Zwraca sformatowany tekst na podstawie ciągu formatu i argumentów.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Zwraca sformatowany tekst utworzony przez zastosowanie elementu <code>arguments</code> z listy lub rekordu do ciągu formatu <code>formatString</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Formatuje listę liczb.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatuje różne typy danych z rekordu zgodnie z kulturą Polska — polski.
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
