---
title: Binary.FromText
---

# Binary.FromText


Dekóduje data z textové formy do binární hodnoty.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vrátí výsledek převodu textové hodnoty `text` na binární hodnotu (seznam položek `number`). Může být zadán i parametr `encoding`, který označuje kódování použité v textové hodnotě. Pro parametr `encoding` lze použít následující hodnoty `BinaryEncoding`.

-   `BinaryEncoding.Base64`: Kódování Base 64
-   `BinaryEncoding.Hex`: Šestnáctkové kódování


## Examples

### Example #1
Dekódovat "1011" na binární hodnotu
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Dekódovat "1011" na binární hodnotu s šestnáctkovým kódováním
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
