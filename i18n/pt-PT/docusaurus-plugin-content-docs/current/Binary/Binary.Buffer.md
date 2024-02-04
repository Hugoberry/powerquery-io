---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Coloca o valor binário na memória intermédia.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Coloca o valor binário na memória intermédia. O resultado desta chamada é um valor binário estável, o que significa que terá um comprimento determinista e uma ordem de bytes.


## Examples

### Example #1 
Criar uma versão estável do valor binário.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
