---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Indica se questo valore datetime rientra nel secondo successivo, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel secondo corrente.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel secondo successivo come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel secondo corrente.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determinare se il secondo dopo l&#39;ora di sistema corrente rientra nel secondo successivo.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
