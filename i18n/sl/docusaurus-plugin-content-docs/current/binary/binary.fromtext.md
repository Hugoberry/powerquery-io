---
title: Binary.FromText
---

# Binary.FromText


Dekodira podatke iz besedilne oblike v dvojiško vrednost.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vrne rezultat pretvorbe besedilne vrednosti `text` v dvojiško vrednost (seznam `number`). `encoding` je lahko določen, da kaže kodiranje, ki se uporabi v besedilni vrednosti. Naslednje vrednosti `BinaryEncoding` se lahko uporabijo za `encoding`.

-   `BinaryEncoding.Base64`: kodiranje Base 64
-   `BinaryEncoding.Hex`: šestnajstiško kodiranje


## Examples

### Example #1
Dekodirajte"1011"v dvojiško vrednost.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Dekodirajte"1011"v dvojiško vrednost s šestnajstiškim kodiranjem.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
