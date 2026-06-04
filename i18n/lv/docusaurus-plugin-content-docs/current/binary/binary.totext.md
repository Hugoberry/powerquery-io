---
title: Binary.ToText
---

# Binary.ToText


Binārus datus iekodē teksta formā.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Atgriež rezultātu bināru skaitļu saraksta `binary` pārvēršanai par teksta vērtību. Pēc izvēles var iekļaut vērtību `encoding`, lai norādītu kodējumu, ko izmantot izveidotajai teksta vērtībai Vērtībai `encoding` var izmantot tālāk norādītās `BinaryEncoding` vērtības.

-   `BinaryEncoding.Base64`: kodējums Base 64
-   `BinaryEncoding.Hex`: heksadecimālais kodējums



## Category
Binary
