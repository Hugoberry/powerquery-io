---
title: Binary.Buffer
---

# Binary.Buffer


Almacena en búfer el valor binario en memoria.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

Almacena en búfer el valor binario en memoria. El resultado de esta llamada es un valor binario estable, lo cual significa que tendrá una longitud y un orden de bytes deterministas.


## Examples

### Example #1 
Crear una versión estable del valor binario.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
