---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Indica se questo valore datetime rientra nell&#39;ora precedente, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell&#39;ora corrente.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Indica se questo valore datetime specificato <code>dateTime</code> rientra nell'ora precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determinare se l&#39;ora prima dell&#39;ora di sistema corrente rientra nell&#39;ora precedente.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
