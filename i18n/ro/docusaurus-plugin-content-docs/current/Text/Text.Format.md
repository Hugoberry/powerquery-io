---
title: Text.Format
---

# Text.Format


## Description

Returnează textul formatat dintr-un șir de format și argumente.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Returnează text formatat care este creat prin aplicarea <code>arguments</code> dintr-o listă sau dintr-o înregistrare la un șir de format <code>formatString</code>. Un cod <code>culture</code> opțional poate fi de asemenea furnizat (de exemplu, „ro-RO”).


## Examples

### Example #1 
Formatați o listă de numere.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatați tipuri de date diferite dintr-o înregistrare, în conformitate cu cultura Română - România.
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
