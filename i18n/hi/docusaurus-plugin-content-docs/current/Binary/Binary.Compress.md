---
title: Binary.Compress
---

# Binary.Compress


## Description

दिए गए संपीड़न प्रकार का उपयोग करके बाइनरी मान को संपीड़ित करता है.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

दिए गए कंप्रेशन प्रकार का उपयोग करके एक बाइनरी मान को कंप्रेस करता है. इस कॉल का परिणाम इनपुट की एक कंप्रेस की गई प्रतिलिपि होता है. कंप्रेशन प्रकारों में शामिल है:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
बाइनरी मान को संपीड़ित करें.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
