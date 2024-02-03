---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Atgriež bināru formātu, kas satur teksta vērtību.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Atgriež bināru formātu, kas satur teksta vērtību. Vērtība <code>length</code> norāda dekodējamo baitu skaitu vai garuma bināro formātu, kas atrodas teksta priekšā. Neobligātā vērtība <code>encoding</code> norāda teksta kodējumu. Ja vērtība <code>encoding</code> nav norādīta, tad kodējums tiek noteikts no Unikoda baitu secības atzīmēm. Ja nav nevienas baitu secības atzīmes, tad tiek izmantots <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Dekodēt divus baitus kā ASCII tekstu.
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
Dekodēt ASCII tekstu, ja teksta garums baitos tiek rādīts teksta priekšā kā baits.
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
