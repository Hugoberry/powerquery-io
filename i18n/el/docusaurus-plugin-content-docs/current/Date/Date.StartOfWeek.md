---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Επιστρέφει την αρχή της εβδομάδας.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Επιστρέφει την αρχή της εβδομάδας που περιέχει <code>dateTime</code>.    <code>dateTime</code>  πρέπει να είναι μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.


## Examples

### Example #1 
Βρείτε την αρχή της εβδομάδας για την Τρίτη, 11 Οκτωβρίου 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Βρείτε την αρχή της εβδομάδας για την Τρίτη, 11 Οκτωβρίου 2011, χρησιμοποιώντας τη Δευτέρα ως αρχή της εβδομάδας.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
