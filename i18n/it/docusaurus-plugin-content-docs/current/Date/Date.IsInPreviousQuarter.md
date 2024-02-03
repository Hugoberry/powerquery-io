---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Indica se questo valore date rientra nel trimestre precedente, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel trimestre precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.</li>      </ul>


## Examples

### Example #1 
Determina se il trimestre prima dell&#39;ora di sistema corrente rientra nel trimestre precedente.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
