---
title: Time.EndOfHour
---

# Time.EndOfHour


Επιστρέφει το τέλος της ώρας.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Επιστρέφει το τέλος της ώρας που αντιπροσωπεύεται από `dateTime`, συμπεριλαμβανομένων των κλασματικών δευτερολέπτων. Οι πληροφορίες ζώνης ώρας διατηρούνται.

-   `dateTime`: Μια τιμή `time`, `datetime` ή `datetimezone` από την οποία υπολογίζεται το τέλος της ώρας.


## Examples

### Example #1
Λάβετε το τέλος της ώρας για τις 14/5/2011 05:00:00 μ.μ.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Λάβετε το τέλος της ώρας για τις 17/5/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
