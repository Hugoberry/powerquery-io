---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Επιστρέφει το τέλος του τριμήνου.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Επιστρέφει το τέλος του τριμήνου που περιέχει <code>dateTime</code>. Οι πληροφορίες ζώνης ώρας διατηρούνται.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> από την οποία υπολογίζεται το τέλος του τριμήνου.</li>      </ul>


## Examples

### Example #1 
Βρείτε το τέλος του τριμήνου για τις 10 Οκτωβρίου 2011, 8:00 π.μ.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
