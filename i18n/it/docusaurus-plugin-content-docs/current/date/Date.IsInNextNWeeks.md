---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Indica se questo valore date rientra nel numero di settimane successivo, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di settimane successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>weeks</code>: numero di settimane.</li>      </ul>


## Examples

### Example #1 
Determina se la settimana dopo l&#39;ora di sistema corrente rientra nelle due settimane successive.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
