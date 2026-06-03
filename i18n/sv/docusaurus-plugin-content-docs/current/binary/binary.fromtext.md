---
title: Binary.FromText
---

# Binary.FromText


Avkodar data från ett textformat till binärformat.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnerar resultatet från konverteringen av textvärdet `text` till ett binärvärde (lista med `number`). `encoding` kan användas för att ange kodningen som ska användas i textvärdet. Följande `BinaryEncoding`\-värden kan användas för `encoding`.

-   `BinaryEncoding.Base64`: Base 64-kodning
-   `BinaryEncoding.Hex`: Hexadecimal kodning


## Examples

### Example #1
Avkoda "1011" till binärformat.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Avkoda "1011" till binärformat med hexadecimal kodning.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
