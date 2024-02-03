---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Aggiunge le settimane specificate alla data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Restituisce l'elemento <code>date</code>, <code>datetime</code> o <code>datetimezone</code> risultante dall'aggiunta di <code>numberOfWeeks</code> settimane al valore <code>dateTime</code> di <code>datetime</code>.      <ul>      <li><code>dateTime</code>: il valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a cui vengono aggiunte le settimane.</li>      <li><code>numberOfWeeks</code>: il numero di settimane da aggiungere.</li>      </ul>


## Examples

### Example #1 
Aggiungere 2 settimane al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
