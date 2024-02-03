---
title: Binary.Decompress
---

# Binary.Decompress


## Description

दिए गए संपीड़न प्रकार का उपयोग करके बाइनरी मान को असंपीड़ित करता है.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

दिए गए कंप्रेशन प्रकार का उपयोग करके एक बाइनरी मान को असंम्पिड्य करता है. इस कॉल का परिणाम इनपुट की एक असंम्पिड्य की गई प्रतिलिपि होता है. कंप्रेशन प्रकारों में शामिल है:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
बाइनरी मान को असंपीड़ित करें.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
