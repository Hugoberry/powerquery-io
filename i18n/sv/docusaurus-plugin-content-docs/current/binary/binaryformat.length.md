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

Returnerar ett binärformat som begränsar mängden data som kan läsas. Både <code>BinaryFormat.List</code> och <code>BinaryFormat.Binary</code> kan användas för att läsa till slutet av data. <code>BinaryFormat.Length</code> kan användas för att begränsa antalet byte som läses. Parametern <code>binaryFormat</code> anger binärformatet som ska begränsas. Parametern <code>length</code> anger antalet byte som ska läsas. Parametern <code>length</code> kan antingen vara ett numeriskt värde eller ett binärformatvärde som anger formatet för längdvärdet som föregår det lästa värdet.


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
