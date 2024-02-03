---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Indica se questo valore datetime rientra nel numero di minuti precedenti, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di minuti precedenti, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>minutes</code>: numero di minuti.</li>      </ul>


## Examples

### Example #1 
Determinare se il minuto prima dell&#39;ora di sistema corrente rientra nei due minuti precedenti.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
