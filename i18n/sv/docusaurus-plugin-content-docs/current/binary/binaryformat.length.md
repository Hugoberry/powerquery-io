---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Returnerar ett binärformat som begränsar mängden data som kan läsas.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Returnerar ett binärformat som begränsar mängden data som kan läsas. Både `BinaryFormat.List` och `BinaryFormat.Binary` kan användas för att läsa till slutet av data. `BinaryFormat.Length` kan användas för att begränsa antalet lästa byte. Parametern `binaryFormat` anger det binära format som ska begränsas. Parametern `length` anger antalet byte som ska läsas. Parametern `length` kan antingen vara ett numeriskt värde eller ett binärformatvärde som anger formatet för längdvärdet som föregår det lästa värdet.


## Examples

### Example #1
Begränsa antalet lästa byte till 2 när en lista med byte läses.
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
Begränsa antalet byte som lästs vid läsning av en lista med byte till bytevärdet före listan.
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
