---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Vraća kraj kvartala.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vraća kraj kvartala koji sadrži `dateTime`. Informacije o vremenskoj zoni se čuvaju.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` na osnovu koje se izračunava kraj kvartala.


## Examples

### Example #1
Pronađite kraj kvartala za 10. oktobar 2011. u 08:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
