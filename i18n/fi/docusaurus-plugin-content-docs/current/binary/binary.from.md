---
title: Binary.From
---

# Binary.From


Luo binaarin annetusta arvosta


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Palauttaa `binary`\-arvon annetusta kohteesta `value`. Jos annettu `value` on `null`, `Binary.From` palauttaa kohteen `null`. Jos annettu `value` on `binary`, palautetaan `value`. Seuraavia tyyppejä olevat arvot voidaan muuntaa `binary`\-arvoksi:

-   `text`: `binary`\-arvo tekstiesityksestä. Jos haluat lisätietoja, katso `Binary.FromText`.

Jos `value` on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1
Hae kohteen `"1011"` `binary`\-arvo.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
