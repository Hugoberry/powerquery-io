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

Devuelve un formato binario que elige el formato binario siguiente según un valor que ya se ha leído.  El valor de formato binario generado por esta función funciona en fases:<ul><li>El formato binario especificado por el parámetro <code>binaryFormat</code> se usa para leer un valor.</li><li>El valor se pasa a la función elegida especificada por el parámetro <code>chooseFunction</code>.</li><li>La función elegida inspecciona el valor y devuelve un segundo formato binario.</li><li>El segundo formato binario se usa para leer un segundo valor.</li><li>Si se especifica la función de combinación, se pasan el primer y el segundo valor a la misma y se devuelve el valor resultante.</li><li>Si no se especifica la función de combinación, se devuelve el segundo valor.</li><li>Se devuelve el segundo valor.</li></ul>El parámetro opcional <code>type</code> indica el tipo de formato binario que devolverá la función elegida.  Puede especificar <code>type any</code>, <code>type list</code> o <code>type binary</code>.  Si el parámetro <code>type</code> no se especifica, se usa <code>type any</code>.   Si se usa <code>type list</code> o <code>type binary</code>, el sistema puede devolver un valor <code>binary</code> o <code>list</code> en secuencia en vez de uno almacenado en búfer, lo que puede reducir la cantidad de memoria necesaria para leer el formato.


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
