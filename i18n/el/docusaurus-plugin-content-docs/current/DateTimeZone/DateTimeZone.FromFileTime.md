---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Δημιουργεί μια datetimezone από έναν αριθμού μήκους 64 bit.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Δημιουργεί μια τιμή <code>datetimezone</code> από την τιμή <code>fileTime</code> και τη μετατρέπει στην τοπική ζώνη ώρας. Η filetime είναι μια τιμή ώρας αρχείου των Windows που αντιπροσωπεύει τον αριθμό διαστημάτων 100 νανοδευτερολέπτων που πέρασαν από τις 12:00 τα μεσάνυχτα της 1ης Ιανουαρίου 1601 μ.Χ. (Κ.Ε.) Συντονισμένη παγκόσμια ώρα (UTC).    


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;129876402529842245&lt;/code&gt; σε τιμή datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
