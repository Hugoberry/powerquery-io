---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Returnerer et binært format, der begrænser den mængde data, som kan læses.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Returnerer et binært format, der begrænser den mængde data, som kan læses. Både `BinaryFormat.List` og `BinaryFormat.Binary` kan bruges til at læse indtil slutningen af dataene. `BinaryFormat.Length` kan bruges til at begrænse antallet af læste byte. Parameteren `binaryFormat` angiver det binære format, der skal begrænses. Parameteren `length` angiver det mindste antal byte, der skal læses. Parameteren `length` kan enten være en talværdi eller en binær formatværdi, der angiver formatet af den længdeværdi, der står foran den værdi, der læses.


## Examples

### Example #1
Begræns det antal byte, der læses, til 2 ved læsning af en liste over byte.
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
Begræns antallet af byte ved læsning af en liste over byte til den byteværdi, der står foran listen.
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
