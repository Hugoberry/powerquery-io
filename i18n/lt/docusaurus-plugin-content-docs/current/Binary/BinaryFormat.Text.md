---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Pateikiamas dvejetainis formatas, kuris perskaito teksto reikšmę.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Pateikiamas dvejetainis formatas, kuris perskaito teksto reikšmę. <code>length</code> nurodo dekoduotinų baitų skaičių arba dvejetainį formatą, kuris yra prieš tekstą. Pasirinktinė <code>encoding</code> reikšmė nurodo teksto kodavimą. Jei <code>encoding</code> nenurodyta, tada kodavimas nustatomas iš „Unicode“ baitų eiliškumo žymų. Jei nėra baitų eiliškumo žymų, tada naudojama <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Dekoduoti du baitus kaip ASCII tekstą.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2 
Dekoduoti ASCII tekstą, kur teksto ilgis baitais rodomas prieš tekstą kaip baitas.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
