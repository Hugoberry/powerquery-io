---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Повертає двійковий формат, який читає текстове значення.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Повертає двійковий формат, який читає текстове значення. <code>length</code> указує кількість байтів для розшифровки або двійковий формат довжини, що передує тексту. Необов’язкове значення <code>encoding</code> указує кодування тексту. Якщо <code>encoding</code> не вказано, кодування визначається за позначками порядку байтів Юнікоду. Якщо позначки порядку байтів відсутні, використовується <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Розшифрування двох байтів як тексту ASCII.
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
Розшифрування тексту ASCII, де байт довжини тексту в байтах передує самому тексту.
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
