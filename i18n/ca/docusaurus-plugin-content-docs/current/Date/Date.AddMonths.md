---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Afegeix els mesos especificats a la data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Retorna el resultat <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir d'afegir <code>numberOfMonths</code> mesos al valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al qual s'afegeixen mesos.</li>        <li><code>numberOfMonths</code>: nombre de mesos que s'han d'afegir.</li>      </ul>


## Examples

### Example #1 
Afegeix 5 mesos al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Afegeix 18 mesos al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data i l&#39;hora de 5/14/2011 08:15:22 am.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
