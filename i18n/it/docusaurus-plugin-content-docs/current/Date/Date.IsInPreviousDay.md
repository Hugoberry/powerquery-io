---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Indica se il valore date rientra nel giorno precedente, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel giorno precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.</li>      </ul>


## Examples

### Example #1 
Determina se il giorno prima dell&#39;ora di sistema corrente rientra nel giorno precedente.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
