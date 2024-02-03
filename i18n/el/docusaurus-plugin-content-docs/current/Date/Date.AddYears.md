---
title: Date.AddYears
---

# Date.AddYears


## Description

Προσθέτει τα καθορισμένα έτη στην ημερομηνία.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Επιστρέφει το αποτέλεσμα της <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> μετά την πρόσθεση <code>numberOfYears</code> σε μια τιμή <code>dateTime</code> της <code>datetime</code>.      <ul>        <li><code>dateTime</code>: Η τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> στην οποία προστίθενται έτη.</li>        <li><code>numberOfYears</code>: Ο αριθμός των ετών που θα προστεθούν.</li>      </ul>


## Examples

### Example #1 
Προσθέτει 4 έτη στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Προσθέτει 10 έτη στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία και ώρα 14/5/2011 08:15:22 π.μ.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
