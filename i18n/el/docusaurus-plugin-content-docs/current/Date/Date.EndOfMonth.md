---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Επιστρέφει το τέλος του μήνα.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Επιστρέφει το τέλος του μήνα που περιέχει <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> από την οποία υπολογίζεται το τέλος του μήνα</li>      </ul>


## Examples

### Example #1 
Λάβετε το τέλος του μήνα για τις 14/5/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Λάβετε το τέλος του μήνα για τις 17/5/2011 05:00:00 μ.μ. -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
