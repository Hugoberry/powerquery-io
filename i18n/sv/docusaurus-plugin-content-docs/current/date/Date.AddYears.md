---
title: Date.AddYears
---

# Date.AddYears


Lägger till angivna år i datumet.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Returnerar <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-resultatet när <code>numberOfYears</code> läggs till i ett <code>datetime</code>-värde <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värdet som år läggs till i.</li>        <li><code>numberOfYears</code>: Antalet år som ska läggas till.</li>      </ul>


## Examples

### Example #1 
Lägg till 4 år i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Lägg till 10 år i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar datumet och tiden motsvarande den 14 maj 2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
