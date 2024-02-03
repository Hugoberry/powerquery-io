---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Επιστρέφει έναν αριθμό από 28 έως 31, ο οποίος δείχνει τον αριθμό των ημερών του μήνα.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Επιστρέφει τον αριθμό των ημερών του μήνα στην τιμή <code>dateTime</code> της <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.  <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για την οποία επιστρέφεται ο αριθμός των ημερών του μήνα.</li>      </ul>


## Examples

### Example #1 
Ο αριθμός των ημερών του μήνα Δεκεμβρίου όπως αντιπροσωπεύεται από την &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
