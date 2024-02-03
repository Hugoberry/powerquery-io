---
title: Binary.Range
---

# Binary.Range


## Description

Retorna um subconjunto do valor binário começando em um deslocamento.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Retorna um subconjunto do valor binário começando no deslocamento <code>binary</code>. Um parâmetro opcional, <code>offset</code>, define o comprimento máximo do subconjunto.


## Examples

### Example #1 
Retorna um subconjunto do valor binário começando no deslocamento 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Retorna um subconjunto de comprimento 2 do deslocamento 6 do valor binário.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
