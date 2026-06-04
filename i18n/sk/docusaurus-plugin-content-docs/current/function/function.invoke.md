---
title: Function.Invoke
---

# Function.Invoke


Vyvolá danú funkciu.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Vyvolá danú funkciu pomocou zadaného zoznamu argumentov a vráti výsledok.


## Examples

### Example #1
Vyvolá Record.FieldNames s jedným argumentom \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
