---
title: Text.FromBinary
---

# Text.FromBinary


डेटा को बाइनरी फ़ॉर्म से पाठ में डीकोड करता है.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

निर्दिष्ट एन्कोडिंग प्रकार का उपयोग करके बाइनरी मान से टेक्स्ट मान में डेटा को डिकोड करता है.

-   `binary`: डिकोड किया जाने वाला बाइनरी डेटा.
-   `encoding`: (वैकल्पिक) बाइनरी को टेक्स्ट में बदलने के लिए प्रयुक्त एन्कोडिंग. एन्कोडिंग का प्रकार निर्दिष्ट करने के लिए `BinaryEncoding.Type` का उपयोग करें. अगर यह मान निर्दिष्ट नहीं है, तो डिफ़ॉल्ट मान `BinaryEncoding.Utf8` होता है.


## Examples

### Example #1
टेक्स्ट को बाइनरी में एन्कोड करें, एक दृश्यमान Base64 स्ट्रिंग तैयार करें, फिर उसे वापस टेक्स्ट में डिकोड करें.
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
बाइट ऑर्डर मार्क (BOM) के साथ बाइनरी में टेक्स्ट को एन्कोड करें, एक देखने योग्य हेक्साडेसिमल स्ट्रिंग तैयार करें, फिर इसे वापस टेक्स्ट में डिकोड करें.
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
