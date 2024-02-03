---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Vraća kraj kvartala.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Vraća kraj kvartala koji sadrži <code>dateTime</code>. Informacije o vremenskoj zoni se čuvaju.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izračunava kraj kvartala.</li>      </ul>


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
