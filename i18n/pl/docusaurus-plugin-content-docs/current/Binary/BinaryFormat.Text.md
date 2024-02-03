---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Zwraca format binarny odczytujący wartość tekstową.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Zwraca format binarny odczytujący wartość tekstową.  Parametr <code>length</code> określa liczbę bajtów do zdekodowania lub format binarny długości poprzedzający tekst.  Opcjonalna wartość <code>encoding</code> określa kodowanie tekstu.  Jeśli parametr <code>encoding</code> nie jest określony, kodowanie jest ustalane na podstawie znaczników kolejności bajtów Unicode.  W przypadku braku znaczników kolejności bajtów jest używany format <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Zdekoduj dwa bajty jako tekst w formacie ASCII.
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
Zdekoduj tekst w formacie ASCII, w którym długość tekstu w bajtach występuje przed tekstem w postaci bajtów.
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
