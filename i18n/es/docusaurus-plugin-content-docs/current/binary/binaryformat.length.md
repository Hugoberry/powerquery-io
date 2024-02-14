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

Devuelve un formato binario que limita la cantidad de datos que se pueden leer.  Tanto <code>BinaryFormat.List</code> como <code>BinaryFormat.Binary</code> se pueden usar para leer hasta el final de los datos.  <code>BinaryFormat.Length</code> puede usarse para limitar el número de bytes que se leen.  El parámetro <code>binaryFormat</code> especifica el formato binario que limitar.  El parámetro <code>length</code> especifica el número de bytes que leer.  El parámetro <code>length</code> puede ser un valor numérico o un valor de formato binario que especifica el formato del valor de longitud que aparece que antecede al valor que se lee.


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
