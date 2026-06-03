---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Devuelve un formato binario que limita la cantidad de datos que se pueden leer.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Devuelve un formato binario que limita la cantidad de datos que se pueden leer. Tanto `BinaryFormat.List` como `BinaryFormat.Binary` se pueden usar para leer hasta el final de los datos. `BinaryFormat.Length` se puede usar para limitar el número de bytes que se leen. El parámetro `binaryFormat` especifica el formato binario que se va a limitar. El parámetro `length` especifica el número de bytes que leer. El parámetro `length` puede ser un valor numérico o un valor de formato binario que especifica el formato del valor de longitud que aparece que antecede al valor que se lee.


## Examples

### Example #1
Limitar el número de bytes leídos a 2 al leer una lista de bytes.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Limite el número de bytes leídos al leer una lista de bytes al valor de byte que precede a la lista.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
