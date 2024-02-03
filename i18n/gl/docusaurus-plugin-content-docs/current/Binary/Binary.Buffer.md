---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Almacena no búfer o valor binario na memoria.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Almacena no búfer o valor binario na memoria.  O resultado desta chamada é un valor binario estable, o que significa que terá unha lonxitude determinista e orde de bytes.


## Examples

### Example #1 
Crear unha versión estable do valor binario.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
