---
title: Binary.Range
---

# Binary.Range


Devolve um subconjunto do valor binário, começando num desvio.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Devolve um subconjunto do valor binário, começando no desvio <code>binary</code>. Um parâmetro opcional, <code>offset</code>, define o comprimento máximo do subconjunto.


## Examples

### Example #1 
Devolve um subconjunto do valor binário, começando no desvio 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Devolve um subconjunto de comprimento 2 do desvio 6 do valor binário.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
