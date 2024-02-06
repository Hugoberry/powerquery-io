---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica se questo valore di data/ora rientra nel minuto corrente, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore di data/ora specificato <code>dateTime</code> rientra nel minuto corrente, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code>, o valore <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determinare se l&#39;ora di sistema corrente rientra nel minuto corrente.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
