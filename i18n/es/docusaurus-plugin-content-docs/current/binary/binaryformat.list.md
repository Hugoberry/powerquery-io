---
title: BinaryFormat.List
---

# BinaryFormat.List


Devuelve un formato binario que lee una secuencia de elementos y devuelve una lista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Devuelve un formato binario que lee una secuencia de elementos y devuelve un `list`. El parámetro `binaryFormat` especifica el formato binario de cada elemento. Hay tres formas de determinar el número de elementos leídos:

-   Si no se especifica el `countOrCondition`, el formato binario leerá hasta que no haya más elementos.
-   Si el `countOrCondition` es un número, entonces el formato binario leerá ese número de elementos.Si el es una función, entonces esa función será invocada para cada elemento leído.
-   Si el `countOrCondition` es un formato binario, entonces se espera que el recuento de elementos preceda a la lista, y el formato especificado se utiliza para leer el recuento.
-   Si el `countOrCondition` es un formato binario, entonces se espera que el recuento de elementos preceda a la lista, y el formato especificado se utiliza para leer el recuento.


## Examples

### Example #1
Lea los bytes hasta el final de los datos.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Lea dos bytes.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3
Lea los bytes hasta que el valor de bytes sea mayor o igual que dos.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
