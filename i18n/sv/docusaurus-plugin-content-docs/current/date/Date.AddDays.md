---
title: Date.AddDays
---

# Date.AddDays


Lägger till angivna dagar i datumet.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Returnerar <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-resultatet när <code>numberOfDays</code> dagar har lagts till i <code>datetime</code>-värdet <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värdet som dagar läggs till i.</li>      <li><code>numberOfDays</code>: Antalet dagar som ska läggas till.</li>      </ul>


## Examples

### Example #1 
Lägg till 5 dagar i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
