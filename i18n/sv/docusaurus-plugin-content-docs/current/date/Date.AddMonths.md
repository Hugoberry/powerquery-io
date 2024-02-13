---
title: Date.AddMonths
---

# Date.AddMonths


Lägger till angivna månader i datumet.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Returnerar <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-resultatet när <code>numberOfMonths</code> månader har lagts till i <code>datetime</code>-värdet <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värdet som månader läggs till i.</li>        <li><code>numberOfMonths</code>: Antalet månader som ska läggas till.</li>      </ul>


## Examples

### Example #1 
Lägg till 5 månader i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Lägg till 18 månader i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar datumet och tiden motsvarande den 14 maj 2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
