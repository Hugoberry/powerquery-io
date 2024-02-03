---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Επιστρέφει το τέλος της ημέρας.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Επιστρέφει το τέλος της ημέρας που αντιπροσωπεύεται από <code>dateTime</code>. Οι πληροφορίες ζώνης ώρας διατηρούνται.      <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> από την οποία υπολογίζεται το τέλος της ημέρας.</li>      </ul>


## Examples

### Example #1 
Λάβετε το τέλος της ημέρας για τις 14/5/2011 05:00:00 μ.μ.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Λάβετε το τέλος της ημέρας για τις 17/5/2011 05:00:00 μ.μ. -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
