---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Indica se questo valore date rientra nel numero di mesi precedente, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel mese corrente.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di mesi precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel mese corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>months</code>: numero di mesi.</li>      </ul>


## Examples

### Example #1 
Determina se il mese prima dell&#39;ora di sistema corrente rientra nei due mesi precedenti.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
