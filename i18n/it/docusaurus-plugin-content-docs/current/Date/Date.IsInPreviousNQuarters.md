---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Indica se questo valore date rientra nel numero di trimestri precedente, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di trimestri precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>quarters</code>: numero di trimestri.</li>      </ul>


## Examples

### Example #1 
Determina se il trimestre prima dell&#39;ora di sistema corrente rientra nei due trimestri precedenti.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
