---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Devuelve un formato binario que elige el formato binario siguiente según un valor que ya se ha leído.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Devuelve un formato binario que elige el formato binario siguiente según un valor que ya se ha leído. El valor de formato binario generado por esta función funciona en fases:

-   El formato binario especificado por el parámetro `binaryFormat` se usa para leer un valor.
-   El valor se pasa a la función elegida especificada por el parámetro `chooseFunction`.
-   La función elegida inspecciona el valor y devuelve un segundo formato binario.
-   El segundo formato binario se usa para leer un segundo valor.
-   Si se especifica la función de combinación, se pasan el primer y el segundo valor a la misma y se devuelve el valor resultante.
-   Si no se especifica la función de combinación, se devuelve el segundo valor.
-   Se devuelve el segundo valor.

El parámetro opcional `type` indica el tipo de formato binario que devolverá la función elegida. Puede especificar `type any`, `type list` o `type binary`. Si el parámetro `type` no se especifica, se usa `type any`. Si se usa `type list` o `type binary`, el sistema puede devolver un valor `binary` o `list` en secuencia en vez de uno almacenado en búfer, lo que puede reducir la cantidad de memoria necesaria para leer el formato.


## Examples

### Example #1
Leer una lista de bytes cuyo número de elementos viene determinado por el primer byte.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Leer una lista de bytes cuyo número de elementos viene determinado por el primer byte y conservar el primer byte leído.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Leer una lista de bytes cuyo número de elementos viene determinado por el primer byte con una lista en secuencia.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
