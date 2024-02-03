---
title: Function.Invoke
---

# Function.Invoke


## Description

Vyvolá danú funkciu


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Vyvolá danú funkciu pomocou zadaného zoznamu argumentov a vráti výsledok.


## Examples

### Example #1 
Vyvolá funkciu Record.FieldNames s jedným argumentom [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
