---
title: Date.AddDays
---

# Date.AddDays


## Description

Lisää määritetyt päivät päivämäärään.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Palauttaa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-tuloksen siitä, kun <code>numberOfDays</code> päivää lisätään <code>datetime</code>-arvoon <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, johon päivät lisätään.</li>      <li><code>numberOfDays</code>: lisättävien päivien määrä.</li>      </ul>


## Examples

### Example #1 
Lisää viisi päivää &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
