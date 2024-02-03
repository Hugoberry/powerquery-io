---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Επιστρέφει το τέλος του έτους.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Επιστρέφει το τέλος του έτους που περιέχει <code>dateTime</code>, συμπεριλαμβανομένων των κλασματικών δευτερολέπτων. Οι πληροφορίες ζώνης ώρας διατηρούνται.      <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> από την οποία υπολογίζεται το τέλος του έτους.</li>      </ul>


## Examples

### Example #1 
Λάβετε το τέλος του έτους για τις 14/5/2011 05:00:00 μ.μ.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Λάβετε το τέλος της ώρας για τις 17/5/2011 05:00:00 μ.μ. -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
