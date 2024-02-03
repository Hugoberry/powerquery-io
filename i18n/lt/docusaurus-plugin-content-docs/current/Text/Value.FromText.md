---
title: Value.FromText
---

# Value.FromText


## Description

Sukuriama griežtai įvesta reikšmė iš tekstinės išraiškos.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekoduojama reikšmė iš tekstinės pateikties <code>text</code> ir interpretuojama kaip atitinkamo tipo reikšmė.    <code>Value.FromText</code> naudoja tekstinę reikšmę ir pateikia skaičių, loginę reikšmę, neapibrėžtą reikšmę, datos ir laiko reikšmę, trukmės reikšmę arba tekstinę reikšmę. Tuščia tekstinė reikšmė interpretuojama kaip neapibrėžta reikšmė.    Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).



## Category
Text.Conversions from and to text
