---
title: Text.ToBinary
---

# Text.ToBinary


Codifica o texto em formato binário.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Codifica um valor de texto em um valor binário usando a codificação especificada.

-   `text`: o texto a ser codificado.
-   `encoding`: (Opcional) A codificação usada para converter o texto em binário. Use `BinaryEncoding.Type` para especificar o tipo de codificação. Se esse valor não for especificado, o valor padrão será `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Opcional) Determina se uma Marca de Ordem de Byte (BOM) deve ser incluída no início da saída binária. Defina como `true` para incluir automaticamente a BOM; caso contrário, `false`. Se esse valor não for especificado, o valor padrão será `false`.


## Examples

### Example #1
Codifique o texto em binário, produza uma cadeia de caracteres Base64 exibivel e, em seguida, decodifique-o de volta para o texto.
```powerquery
let
    originalText = "Testing 1-2-3",

    // Default UTF-8 binary
    binaryData = Text.ToBinary(originalText),

    // Convert binary to viewable Base64 string
    encodedText = Binary.ToText(binaryData, BinaryEncoding.Base64),

    // Decode back to text
    decodedText = Text.FromBinary(binaryData),

    result = [
        OriginalText = originalText,
        BinaryBase64 = encodedText,
        DecodedText = decodedText
    ]
in
    result
```

Result: 
```powerquery
[
    OriginalText = "Testing 1-2-3",
    BinaryBase64 = "VGVzdGluZyAxLTItMw==",
    DecodedText = "Testing 1-2-3"
]
```


### Example #2
Codifique o texto em binário com uma Marca de Ordem de Byte (BOM), produza uma cadeia de caracteres hexadecimal exibivel e, em seguida, decodifique-a de volta para o texto.
```powerquery
let
    originalText = "Testing 1-2-3",

    // Convert to binary with BOM
    binaryData = Text.ToBinary(originalText, TextEncoding.Utf16, true),

    // Show binary as hex to demonstrate presence of BOM (fffe)
    binaryAsHex = Binary.ToText(binaryData, BinaryEncoding.Hex),

    // Decode back to text
    decodedText = Text.FromBinary(binaryData, TextEncoding.Utf16),

    // Compare original text and decoded text
    isIdentical = originalText = decodedText,

    result = [
        OriginalText = originalText,
        BinaryHex = binaryAsHex,
        DecodedText = decodedText,
        IsIdentical = isIdentical
    ]
in
    result
```

Result: 
```powerquery
[
    OriginalText = "Testing 1-2-3",
    BinaryHex = "fffe540065007300740069006e006700200031002d0032002d003300",
    DecodedText = "Testing 1-2-3",
    IsIdentical = true
]
```




## Category
Text.Conversions from and to text
