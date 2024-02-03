---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Retorna un format binari que tria el format binari següent basat en un valor que ja s&#39;ha llegit.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Retorna un format binari que tria el format binari següent basat en un valor que ja s'ha llegit.  El valor de format binari produït per aquesta funció funciona en les fases:<ul><li>El format binari especificat pel paràmetre <code>binaryFormat</code> s'utilitza per llegir un valor.</li><li>El valor es passa a la funció de tria especificada pel paràmetre <code>chooseFunction</code>.</li><li>La funció de tria inspecciona el valor i retorna un segon format binari.</li><li>El segon format binari s'utilitza per llegir un segon valor.</li><li>Si s'especifica la funció de combinació, el primer valor i el segon valor es passen a la funció de combinació, i es retorna el valor resultant.</li><li>Si no s'especifica la funció de combinació, es retorna el segon valor.</li><li>Es retorna el segon valor.</li></ul>El paràmetre opcional <code>type</code> indica el tipus de format binari que retornarà la funció de tria.  Es pot especificar <code>type any</code>, <code>type list</code> o <code>type binary</code>.  Si no s'especifica el paràmetre <code>type</code>, s'utilitza <code>type any</code>.   Si s'utilitza <code>type list</code> o <code>type binary</code>, és possible que el sistema pugui retornar un valor <code>binary</code> o <code>list</code> de transmissió per seqüències en lloc d'un valor emmagatzemat a la memòria intermèdia, la qual cosa pot reduir la quantitat de memòria necessària per llegir el format.


## Examples

### Example #1 
Llegeix una llista de bytes en què el nombre d&#39;elements ve determinat pel primer byte.
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
Llegeix una llista de bytes en què el nombre d&#39;elements ve determinat pel primer byte i conserva el primer byte llegit.
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
Llegeix una llista de bytes en què el nombre d&#39;elements ve determinat pel primer byte que utilitzi una llista de transmissió per seqüències.
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
