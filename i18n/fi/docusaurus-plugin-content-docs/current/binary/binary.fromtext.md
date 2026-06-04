---
title: Binary.FromText
---

# Binary.FromText


Purkaa tietojen koodauksen tekstimuodosta binaariksi.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Palauttaa tekstiarvon `text` binaariksi muuntamisen tuloksen (`number`\-luettelo). `encoding` voidaan määrittää ilmaisemaan tekstiarvossa käytetty koodaus. Seuraavia `BinaryEncoding`\-arvoja voidaan käyttää kohteelle `encoding`.

-   `BinaryEncoding.Base64`: Base 64 -koodaus
-   `BinaryEncoding.Hex`: heksadesimaalikoodaus


## Examples

### Example #1
Pura kohteen "1011" koodaus binaariksi.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Pura kohteen 1011 koodaus binaariksi käyttäen heksadesimaalikoodausta.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
