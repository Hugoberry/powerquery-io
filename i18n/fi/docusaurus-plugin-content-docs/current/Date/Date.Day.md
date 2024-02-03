---
title: Date.Day
---

# Date.Day


## Description

Palauttaa päivämääräosan.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Palauttaa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvon päivämääräosan.      <ul>        <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, josta päivämääräosa poimitaan.</li>      </ul>


## Examples

### Example #1 
Hae päivämääräosa &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvosta, joka edustaa päivämäärää ja aikaa 14.5.2011 17.00.00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
