---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indica se questo valore datetime rientra nel numero di ore precedenti, come determinato dalla data e dall&#39;ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell&#39;ora corrente.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica se il valore datetime specificato <code>dateTime</code> rientra nel numero di ore precedenti, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      <li><code>hours</code>: numero di ore.</li>      </ul>


## Examples

### Example #1 
Determinare se l&#39;ora prima dell&#39;ora di sistema corrente rientra nelle due ore precedenti.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
