---
title: Binary.Split
---

# Binary.Split


Delar upp den angivna binärfilen i en lista över binärfiler med hjälp av den angivna sidstorleken.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Delar upp `binary` i en lista med binärfiler där det första elementet i utdatalistan är en binärfil som innehåller först `pageSize` byte från källbinärfilen, nästa element i utdatalistan är en binärfil som innehåller följande `pageSize` byte från källbinärfilen osv.



## Category
Binary
