---
title: Binary.ToText
---

# Binary.ToText


Kodira dvojiške podatke v besedilno obliko.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Vrne rezultat pretvorbe dvojiškega seznama števil `binary` v besedilno vrednost. Izbirno se lahko določi `encoding`, da kaže kodiranje, ki naj se uporabi v ustvarjeni besedilni vrednosti Naslednje vrednosti `BinaryEncoding` se lahko uporabijo za `encoding`.

-   `BinaryEncoding.Base64`: kodiranje Base 64
-   `BinaryEncoding.Hex`: šestnajstiško kodiranje



## Category
Binary
