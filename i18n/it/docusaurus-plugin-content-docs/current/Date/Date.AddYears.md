---
title: Date.AddYears
---

# Date.AddYears


## Description

Aggiunge gli anni specificati alla data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Restituisce l'elemento <code>date</code>, <code>datetime</code> o <code>datetimezone</code> risultante dall'aggiunta di <code>numberOfYears</code> al valore <code>dateTime</code> di <code>datetime</code>.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a cui vengono aggiunti gli anni.</li>        <li><code>numberOfYears</code>: numero di anni da aggiungere.</li>      </ul>


## Examples

### Example #1 
Aggiungere 4 anni al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Aggiungere 10 anni al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011 e l&#39;ora 08.15.22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
