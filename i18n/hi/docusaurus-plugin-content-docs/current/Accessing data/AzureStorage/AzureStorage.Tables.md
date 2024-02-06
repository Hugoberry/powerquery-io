---
title: AzureStorage.Tables
---

# AzureStorage.Tables


ऐसी नेविगेशन संबंधी तालिका लौटाता है जिसमें किसी Azure संग्रहण वॉल्ट से निर्दिष्ट खाते में प्राप्त तालिकाएँ शामिल होती हैं.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

किसी Azure संग्रहण कोष्ठ से <code>account</code>, खाता URL पर मिलने वाली प्रत्येक तालिका के लिए एक पंक्ति वाली नेविगेशन तालिका लौटाता है. प्रत्येक पंक्ति में azure तालिका के लिए एक लिंक होता है. अतिरिक्त गुण निर्दिष्ट करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code> प्रदान किया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड्स शामिल हो सकती हैं:    <ul><li><code>Timeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर का अनुरोध छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान स्रोत-विशिष्ट है.</li></ul>



## Category
Accessing data
