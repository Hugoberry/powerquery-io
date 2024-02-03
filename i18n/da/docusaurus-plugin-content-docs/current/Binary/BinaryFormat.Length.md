---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Returnerer et binært format, der begrænser den mængde data, som kan læses.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Returnerer et binært format, der begrænser den mængde data, som kan læses.  Både <code>BinaryFormat.List</code> og <code>BinaryFormat.Binary</code> kan bruges til at læse indtil slutningen af dataene.  <code>BinaryFormat.Length</code> kan bruges til at begrænse det antal byte, der læses.  Parameteren <code>binaryFormat</code> angiver det binære format, der skal begrænses.  Parameteren <code>length</code> angiver det mindste antal byte, der skal læses.  Parameteren <code>length</code> kan enten være en talværdi eller en binær formatværdi, der angiver formatet af den længdeværdi, der står foran den værdi, der læses.


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
