---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Indica se questo valore date rientra nella settimana successiva, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nella settimana successiva, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.</li>      </ul>


## Examples

### Example #1 
Determina se la settimana dopo l&#39;ora di sistema corrente rientra nella settimana successiva.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
