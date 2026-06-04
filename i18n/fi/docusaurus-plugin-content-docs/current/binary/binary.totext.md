---
title: Binary.ToText
---

# Binary.ToText


Koodaa binaaritiedot tekstimuotoon.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Palauttaa binaarilukuluettelon `binary` tekstiarvoksi muuntamisen tuloksen. Valinnaisesti `encoding` voidaan määrittää ilmaisemaan tuotetussa tekstiarvossa käytetty koodaus. Seuraavia `BinaryEncoding`\-arvoja voidaan käyttää kohteelle `encoding`.

-   `BinaryEncoding.Base64`: Base 64 -koodaus
-   `BinaryEncoding.Hex`: heksadesimaalikoodaus



## Category
Binary
