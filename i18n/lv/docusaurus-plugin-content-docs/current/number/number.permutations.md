---
title: Number.Permutations
---

# Number.Permutations


Tiek atgriezts permutāciju skaits.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Tiek atgriezts to permutāciju skaits, kuras var ģenerēt no norādītā vienumu skaita `setSize` atbilstoši norādītajam permutācijas lielumam `permutationSize`.


## Examples

### Example #1
Iegūstiet no 5 vienumiem izveidojamo 3 vienumu permutāciju skaitu.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
