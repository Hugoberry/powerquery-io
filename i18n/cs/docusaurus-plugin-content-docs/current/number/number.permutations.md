---
title: Number.Permutations
---

# Number.Permutations


Vrátí počet permutací.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Vrátí počet permutací, které lze vygenerovat z počtu položek `setSize` se zadanou velikostí permutace `permutationSize`.


## Examples

### Example #1
Zjistí počet permutací celkového počtu 5 položek ve skupinách po 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
