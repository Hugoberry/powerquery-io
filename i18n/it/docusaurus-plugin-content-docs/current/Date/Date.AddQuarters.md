---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Aggiunge i trimestri specificati alla data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Restituisce l'elemento <code>date</code>, <code>datetime</code> o <code>datetimezone</code> risultante dall'aggiunta di <code>numberOfQuarters</code> trimestri al valore <code>dateTime</code> di <code>datetime</code>.      <ul>      <li><code>dateTime</code>: il valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a cui vengono aggiunti i trimestri.</li>      <li><code>numberOfQuarters</code>: il numero di trimestri da aggiungere.</li>      </ul>


## Examples

### Example #1 
Aggiungere 1 trimestre al valore &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; che rappresenta la data 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
