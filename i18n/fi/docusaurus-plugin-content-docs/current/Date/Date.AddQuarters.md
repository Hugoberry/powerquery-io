---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Lisää määritetyt vuosineljännekset päivämäärään.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Palauttaa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-tuloksen siitä, kun <code>numberOfQuarters</code> vuosineljännestä lisätään <code>datetime</code>-arvoon <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, johon vuosineljännekset lisätään.</li>      <li><code>numberOfQuarters</code>: lisättävien vuosineljännesten määrä.</li>      </ul>


## Examples

### Example #1 
Lisää yksi vuosineljännes &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
