---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indica se questo valore date rientra nel numero di anni successivo, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell&#39;anno corrente.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di anni successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>years</code>: numero di anni.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;anno dopo l&#39;ora di sistema corrente rientra nei due anni successivi.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
