---
title: Number.Permutations
---

# Number.Permutations


## Description

Tiek atgriezts permutāciju skaits.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Tiek atgriezts to permutāciju skaits, kuras var ģenerēt no norādītā vienumu skaita <code>setSize</code> atbilstoši norādītajam permutācijas lielumam <code>permutationSize</code>.


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
