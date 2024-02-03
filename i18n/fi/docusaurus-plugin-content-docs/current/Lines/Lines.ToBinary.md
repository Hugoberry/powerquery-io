---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Muuntaa tekstiluettelon binaariarvoksi käyttäen määritettyä koodausta ja lineSeparator-kohdetta. Määritetty lineSeparator-kohde liitetään kuhunkin riviin.  Jos sitä ei määritetä, käytetään rivinvaihtomerkkejä (CR ja LF).


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Muuntaa tekstiluettelon binaariarvoksi käyttäen määritettyä koodausta ja lineSeparator-kohdetta. Määritetty lineSeparator-kohde liitetään kuhunkin riviin.  Jos sitä ei määritetä, käytetään rivinvaihtomerkkejä (CR ja LF).



## Category
Lines
