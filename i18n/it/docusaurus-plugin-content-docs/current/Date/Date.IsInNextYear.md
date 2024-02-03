---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Indica se questo valore date rientra nell&#39;anno successivo, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell&#39;anno corrente.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nell'anno successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;anno dopo l&#39;ora di sistema corrente rientra nell&#39;anno successivo.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
