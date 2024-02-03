---
title: Text.Format
---

# Text.Format


## Description

Vraća oblikovani tekst iz niske za oblikovanje i argumenata.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Vraća oblikovani tekst koji se pravi tako što se primeni <code>arguments</code> sa liste zapisa na nisku za oblikovanje <code>formatString</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Oblikujte kao listu brojeva.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Oblikujte različite tipove podataka iz zapisa u skladu sa kulturom engleskog jezika (Sjedinjene Države).
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
