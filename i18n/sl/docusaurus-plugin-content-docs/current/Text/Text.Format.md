---
title: Text.Format
---

# Text.Format


## Description

Vrne oblikovano besedilo iz niza oblike in argumentov.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Vrne oblikovano besedilo, ki je ustvarjeno z uporabo parametra <code>arguments</code> s seznama ali iz zapisa v nizu oblike <code>formatString</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Oblikuje seznam številk.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Oblikuje druge podatkovne tipe iz zapisa glede na angleško kulturo (Združene države).
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
