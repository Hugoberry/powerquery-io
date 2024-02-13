---
title: Date.Day
---

# Date.Day


Zwraca składnik dni.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Zwraca składnik dni z danej wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, z której jest wyodrębniany składnik dni.</li>      </ul>


## Examples

### Example #1 
Pobierz składnik dni z wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę i godzinę 2011-05-14 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
