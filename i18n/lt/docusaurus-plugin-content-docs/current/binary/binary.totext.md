---
title: Binary.ToText
---

# Binary.ToText


Dvejetainiai duomenys koduojami į teksto formą.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Pateikiamas dvejetainių skaičių sąrašo `binary` konvertavimo į teksto reikšmę rezultatas. Pasirinktinai `encoding` gali būti nurodyta norint pateikti kodavimą, naudotiną pateiktoje teksto reikšmėje Šias `BinaryEncoding` reikšmes galima naudoti `encoding`.

-   `BinaryEncoding.Base64`: kodavimas „base 64“
-   `BinaryEncoding.Hex`: šešioliktainis kodavimas



## Category
Binary
