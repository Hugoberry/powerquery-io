---
title: Text.FromBinary
---

# Text.FromBinary


Αποκωδικοποιεί δεδομένα από μια δυαδική μορφή σε κείμενο.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Αποκωδικοποιεί δεδομένα από μια δυαδική τιμή σε μια τιμή κειμένου χρησιμοποιώντας τον καθορισμένο τύπο κωδικοποίησης.

-   `binary`: Τα δυαδικά δεδομένα που θα αποκωδικοποιηθούν.
-   `encoding`: (Προαιρετικό) Η κωδικοποίηση που χρησιμοποιείται για τη μετατροπή του δυαδικού αρχείου σε κείμενο. Χρησιμοποιήστε την εντολή `BinaryEncoding.Type` για να καθορίσετε τον τύπο κωδικοποίησης. Αν δεν καθοριστεί αυτή η τιμή, η προεπιλεγμένη τιμή είναι `BinaryEncoding.Utf8`.


## Examples

### Example #1
Κωδικοποιήστε κείμενο σε δυαδική μορφή, δημιουργήστε μια ορατή συμβολοσειρά Base64 και, στη συνέχεια, αποκωδικοποιήστε την ξανά σε κείμενο.
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
Κωδικοποιήστε κείμενο σε δυαδικό σύστημα με ένα Byte Order Mark (BOM), δημιουργήστε μια προβολέα δεκαεξαδική συμβολοσειρά και, στη συνέχεια, αποκωδικοποιήστε την ξανά σε κείμενο.
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
