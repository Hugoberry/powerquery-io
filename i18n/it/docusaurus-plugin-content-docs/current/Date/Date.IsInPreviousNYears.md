---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Indica se questo valore date rientra nel numero di anni precedente, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell&#39;anno corrente.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di anni precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>years</code>: numero di anni.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;anno prima dell&#39;ora di sistema corrente rientra nei due anni precedenti.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
