---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Возвращает двоичный формат, который считывает текстовое значение.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Возвращает двоичный формат, который считывает текстовое значение. `length` указывает число байт для расшифровки или двоичный формат длины, предшествующей тексту. Необязательное значение `encoding` указывает кодировку текста. Если параметр `encoding` не указан, кодировка определяется по меткам порядка байтов Юникода. Если метки порядка байтов отсутствуют, используется `TextEncoding.Utf8`.


## Examples

### Example #1
Расшифровка 2 байтов в виде текста ASCII.
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
Расшифровка текста ASCII, где длина текста в байтах указывается перед текстом в виде байта.
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
