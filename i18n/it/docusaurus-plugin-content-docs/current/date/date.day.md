---
title: Date.Day
---

# Date.Day


Restituisce il componente dei giorni.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Restituisce il componente giorno di un valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene estratto il componente giorno.</li>      </ul>


## Examples

### Example #1 
Ottenere il componente giorno di un valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011 e l&#39;ora 17.00.00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
