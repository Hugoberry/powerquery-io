---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Returnerar ett binärformat som väljer nästa binärformat baserat på ett värde som redan har lästs. Värdet i binärformat som genereras med den här funktionen används i faser:

-   Binärformatet som anges av parametern `binaryFormat` används för att läsa ett värde.
-   Värdet skickas till den choice-funktion som anges av parametern `chooseFunction`.
-   Choice-funktionen inspekterar värdet och returnerar ett andra binärformat.
-   Det andra binärformatet används för att läsa ett andra värde.
-   Om combine-funktionen anges skickas det första och andra värdet till combine-funktionen och det resulterande värdet returneras.
-   Om combine-funktionen inte anges returneras det andra värdet.
-   Det andra värdet returneras.

Den valfria parametern `type` anger typen av binärformat som returneras av choice-funktionen. `type any`, `type list` eller `type binary` kan anges. Om parametern `type` inte anges används `type any`. Om `type list` eller `type binary` används kanske systemet kan returnera ett strömmande `binary`\- eller `list`\-värde i stället för ett buffrat, vilket kan minska mängden minne som krävs för att läsa formatet.


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
