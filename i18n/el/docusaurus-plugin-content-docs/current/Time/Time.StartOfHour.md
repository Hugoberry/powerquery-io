---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Επιστρέφει την αρχή της ώρας.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Επιστρέφει την αρχή της ώρας που αντιπροσωπεύεται από <code>dateTime</code>.    <code>dateTime</code> πρέπει να είναι μια τιμή <code>time</code>, <code>datetime</code> ή <code>datetimezone</code>.


## Examples

### Example #1 
Βρείτε την αρχή της ώρας για τις 10 Οκτωβρίου 2011, 8:10:32 π.μ.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
