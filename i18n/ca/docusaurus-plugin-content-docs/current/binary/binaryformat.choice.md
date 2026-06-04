---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Retorna un format binari que tria el format binari següent basat en un valor que ja s'ha llegit.


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

Retorna un format binari que tria el format binari següent basat en un valor que ja s'ha llegit. El valor de format binari produït per aquesta funció funciona en les fases:

-   El format binari especificat pel paràmetre `binaryFormat` s'utilitza per llegir un valor.
-   El valor es passa a la funció de tria especificada pel paràmetre `chooseFunction`.
-   La funció de tria inspecciona el valor i retorna un segon format binari.
-   El segon format binari s'utilitza per llegir un segon valor.
-   Si s'especifica la funció de combinació, el primer valor i el segon valor es passen a la funció de combinació, i es retorna el valor resultant.
-   Si no s'especifica la funció de combinació, es retorna el segon valor.
-   Es retorna el segon valor.

El paràmetre opcional `type` indica el tipus de format binari que retornarà la funció de tria. Es pot especificar `type any`, `type list` o `type binary`. Si no s'especifica el paràmetre `type`, s'utilitza `type any`. Si s'utilitza `type list` o `type binary`, és possible que el sistema pugui retornar un valor `binary` o `list` de transmissió per seqüències en lloc d'un valor emmagatzemat a la memòria intermèdia, la qual cosa pot reduir la quantitat de memòria necessària per llegir el format.


## Examples

### Example #1
Llegeix una llista de bytes en què el nombre d'elements ve determinat pel primer byte.
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
Llegeix una llista de bytes en què el nombre d'elements ve determinat pel primer byte i conserva el primer byte llegit.
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
Llegeix una llista de bytes en què el nombre d'elements ve determinat pel primer byte que utilitzi una llista de transmissió per seqüències.
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
