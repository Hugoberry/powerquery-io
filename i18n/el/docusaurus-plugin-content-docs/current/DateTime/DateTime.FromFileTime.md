---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Δημιουργεί μια datetime από έναν αριθμό μήκους 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Δημιουργεί μια τιμή <code>datetime</code> από την τιμή <code>fileTime</code> και τη μετατρέπει στην τοπική ζώνη ώρας. Η filetime είναι μια τιμή ώρας αρχείου των Windows που αντιπροσωπεύει τον αριθμό διαστημάτων 100 nanosecond που πέρασαν από τις 12:00 τα μεσάνυχτα, της 1ης Ιανουαρίου 1601 μ.Χ. (Κ.Ε.) Συντονισμένη παγκόσμια ώρα (UTC)


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;129876402529842245&lt;/code&gt; σε τιμή datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
