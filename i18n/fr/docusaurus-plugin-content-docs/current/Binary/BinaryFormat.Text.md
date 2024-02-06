---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Retourne un format binaire qui lit une valeur de texte.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Retourne un format binaire qui lit une valeur de texte.  <code>length</code> spécifie le nombre d'octets à décoder, ou le format binaire de longueur qui précède le texte.  La valeur facultative <code>encoding</code> spécifie le codage du texte.  Si le <code>encoding</code> n'est pas spécifié, alors le codage est déterminé par les marques d'ordre d'octet Unicode.  Si aucune marque d'ordre d'octet n'est présente, alors <code>TextEncoding.Utf8</code> est utilisé.


## Examples

### Example #1 
Décode deux octets comme texte ASCII.
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
Décodez le texte ASCII lorsque la longueur du texte en octets apparaît avant le texte comme un octet.
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
