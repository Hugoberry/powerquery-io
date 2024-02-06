---
title: Binary.Buffer
---

# Binary.Buffer


Armazena em buffer o valor binário na memória.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

Armazena em buffer o valor binário na memória. O resultado dessa chamada é um valor binário estável, o que significa que ele terá um comprimento e uma ordem de bytes deterministas.


## Examples

### Example #1 
Crie uma versão estável do valor binário.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
