---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se questo valore di data/ora rientra nell&#39;ora corrente, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore di data/ora specificato <code>dateTime</code> rientra nell'ora corrente, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code>, o valore <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determinare se l&#39;ora di sistema corrente rientra nell&#39;ora corrente.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
