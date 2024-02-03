---
title: Date.AddDays
---

# Date.AddDays


## Description

Aggiunge i giorni specificati alla data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Restituisce l'elemento <code>date</code>, <code>datetime</code> o <code>datetimezone</code> risultante dall'aggiunta di <code>numberOfDays</code> giorni al valore <code>dateTime</code> di <code>datetime</code>.      <ul>      <li><code>dateTime</code>: il valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a cui vengono aggiunti i giorni.</li>      <li><code>numberOfDays</code>: il numero di giorni da aggiungere.</li>      </ul>


## Examples

### Example #1 
Aggiungere 5 giorni al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
