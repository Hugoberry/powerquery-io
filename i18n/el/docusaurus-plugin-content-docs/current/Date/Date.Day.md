---
title: Date.Day
---

# Date.Day


## Description

Επιστρέφει το στοιχείο ημερομηνίας.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Επιστρέφει το στοιχείο ημέρας της δεδομένης τιμής <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> από την οποία εξάγεται το στοιχείο ημέρας.</li>      </ul>


## Examples

### Example #1 
Λάβετε το στοιχείο ημέρας μιας &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία και ώρα 14/5/2011 05:00:00 μ.μ.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
