---
title: Record.ToList
---

# Record.ToList


Pateikiamas reikšmių sąrašas su įvesties įrašų laukų reikšmėmis.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Pateikiamas reikšmių sąrašas su laukų reikšmėmis iš įvesties `record`.


## Examples

### Example #1
Išskleiskite laukų reikšmes iš įrašo.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
