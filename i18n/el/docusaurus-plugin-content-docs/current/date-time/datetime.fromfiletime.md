---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Δημιουργεί μια datetime από έναν αριθμό μήκους 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Δημιουργεί μια τιμή `datetime` από την τιμή `fileTime` και τη μετατρέπει στην τοπική ζώνη ώρας. Η filetime είναι μια τιμή ώρας αρχείου των Windows που αντιπροσωπεύει τον αριθμό διαστημάτων 100 nanosecond που πέρασαν από τις 12:00 τα μεσάνυχτα, της 1ης Ιανουαρίου 1601 μ.Χ. (Κ.Ε.) Συντονισμένη παγκόσμια ώρα (UTC)


## Examples

### Example #1
Μετατρέψτε το `129876402529842245` σε τιμή datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
