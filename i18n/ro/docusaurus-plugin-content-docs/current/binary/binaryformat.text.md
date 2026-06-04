---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Returnează un format binar care citeşte o valoare text.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Returnează un format binar care citește o valoare text. `length` specifică numărul de byți de decodificat sau formatul binar al lungimii care apare înaintea textului. Valoarea `encoding` opțională arată codificarea textului. Dacă nu se specifică `encoding`, atunci codificarea este determinată din marcatorii pentru ordinea biților Unicode. Dacă nu există marcatori pentru ordinea biților, atunci se utilizează `TextEncoding.Utf8`.


## Examples

### Example #1
Decodificaţi doi octeţi ca text ASCII.
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
Decodificaţi textul ASCII în care lungimea textului în octeţi apare înaintea textului ca octet.
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
