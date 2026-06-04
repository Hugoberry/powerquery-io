---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Pakeičiamos reikšmės pateiktoje įvestyje.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Pakeičiama `old` reikšmė pradiniame `value` į `new` reikšmę. Šią pakeitimo funkciją galima naudoti `List.ReplaceValue` ir `Table.ReplaceValue`.


## Examples

### Example #1
Pakeičiama reikšmė 11 reikšme 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
