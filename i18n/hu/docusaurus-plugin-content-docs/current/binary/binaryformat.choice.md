---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Olyan bináris formátumot ad vissza, amely kiválasztja a következő bináris formátumot egy már kiolvasott érték alapján.


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

Olyan bináris formátumot ad vissza, amely kiválasztja a következő bináris formátumot egy már kiolvasott érték alapján. A függvény által létrehozott bináris formátumú érték a következő szakaszokat követve működik:

-   A(z) `binaryFormat` paraméter által megadott bináris formátum használható az érték kiolvasásához.
-   Az értéket át kell adni a(z) `chooseFunction` paraméter által meghatározott választó függvénynek.
-   A választó függvény megvizsgálja az értéket, és visszaad egy második bináris formátumot.
-   A második bináris formátum egy második érték kiolvasásához használható.
-   Ha meg van adva az egyesítő függvény, akkor a rendszer átadja az első és a második értéket az egyesítő függvénynek, amely visszaadja eredményként létrehozott értéket.
-   Ha nincs megadva az összesítő függvény, a visszaadott érték a második érték lesz.
-   A rendszer visszaadja a második értéket.

A választható `type` paraméter jelzi a választó függvény által visszaadandó bináris formátum típusát. Itt a következő adhatók meg: `type any`, `type list` vagy `type binary`. Ha a(z) `type` paraméter nincs megadva, a rendszer a `type any` lehetőséget használja. A `type list` vagy a `type binary` használata esetén a rendszer streamként küldött `binary` vagy `list` értéket tud visszaadni a pufferelt érték helyett, ami csökkentheti a formátum olvasásához szükséges memória mennyiségét.


## Examples

### Example #1
Kiolvassa a bájtok listáját, amelyben az első bájt határozza meg az elemek számát.
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
Kiolvassa a bájtok listáját, amelyben az első bájt határozza meg az elemek számát; megőrzi az első bájtból kiolvasott értéket.
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
Streamként küldött lista használatával kiolvassa a bájtok listáját, amelyben az első bájt határozza meg az elemek számát.
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
