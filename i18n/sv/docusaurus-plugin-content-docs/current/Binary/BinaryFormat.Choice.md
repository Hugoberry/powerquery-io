---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Returnerar ett binärformat som väljer nästa binärformat baserat på ett värde som redan har lästs.


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

Returnerar ett binärformat som väljer nästa binärformat baserat på ett värde som redan har lästs. Värdet i binärformat som genereras med den här funktionen används i faser:<ul><li>Binärformatet som anges av parametern <code>binaryFormat</code> används för att läsa ett värde.</li><li>Värdet skickas till den choice-funktion som anges av parametern <code>chooseFunction</code>.</li><li>Choice-funktionen inspekterar värdet och returnerar ett andra binärformat.</li><li>Det andra binärformatet används för att läsa ett andra värde.</li><li>Om combine-funktionen anges skickas det första och andra värdet till combine-funktionen och det resulterande värdet returneras.</li><li>Om combine-funktionen inte anges returneras det andra värdet.</li><li>Det andra värdet returneras.</li></ul>Den valfria parametern <code>type</code> anger typen av binärformat som returneras av choice-funktionen. <code>type any</code>, <code>type list</code> eller <code>type binary</code> kan anges. Om parametern <code>type</code> inte anges används <code>type any</code>. Om <code>type list</code> eller <code>type binary</code> används kanske systemet kan returnera ett strömmande <code>binary</code>- eller <code>list</code>-värde i stället för ett buffrat, vilket kan minska mängden minne som krävs för att läsa formatet.


## Examples

### Example #1 
Läs en lista med byte där antalet element bestäms av den första byten.
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
Läs en lista med byte där antalet element bestäms av den första byten, och bevara den första lästa byten.
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
Läs en lista med byte där antalet element bestäms av den första byten med hjälp av en strömningslista.
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
