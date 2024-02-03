---
title: Binary.ToText
---

# Binary.ToText


## Description

Dvejetainiai duomenys koduojami į teksto formą.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Pateikiamas dvejetainių skaičių sąrašo <code>binary</code> konvertavimo į teksto reikšmę rezultatas. Pasirinktinai <code>encoding</code> gali būti nurodyta norint pateikti kodavimą, naudotiną pateiktoje teksto reikšmėje      Šias <code>BinaryEncoding</code> reikšmes galima naudoti <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodavimas „base 64“</li>        <li><code>BinaryEncoding.Hex</code>: šešioliktainis kodavimas</li>      </ul>



## Category
Binary
