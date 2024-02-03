---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Aggiunge i mesi specificati alla data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Restituisce l'elemento <code>date</code>, <code>datetime</code> o <code>datetimezone</code> risultante dall'aggiunta di <code>numberOfMonths</code> mesi al valore <code>dateTime</code> di <code>datetime</code>.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a cui vengono aggiunti i mesi.</li>        <li><code>numberOfMonths</code>: numero di mesi da aggiungere.</li>      </ul>


## Examples

### Example #1 
Aggiungere 5 mesi al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Aggiungere 18 mesi al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011 e l&#39;ora 08.15.22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
