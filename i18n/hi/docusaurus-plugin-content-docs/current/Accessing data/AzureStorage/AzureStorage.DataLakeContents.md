---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


किसी Azure Data Lake Storage फ़ाइल सिस्टम से निर्दिष्ट फ़ाइल की सामग्री लौटाता है.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

एक Azure डेटा लेक संग्रहण फ़ाइल सिस्टम से URL की फ़ाइल की सामग्री, <code>url</code> पर लौटाता है. निम्नलिखित विकल्पों को नियंत्रित करने के लिए <code>options</code> को निर्दिष्ट किया जा सकता है:     <ul><li><code>BlockSize</code> : डेटा उपभोक्ता की प्रतीक्षा करने से पहले पढ़ने के लिए बाइट्स की संख्या. डिफ़ॉल्ट मान 4 MB है.</li><li><code>RequestSize</code> : सर्वर से एक ही HTTP अनुरोध में पढ़ने का प्रयास करने के लिए बाइट्स की संख्या. डिफ़ॉल्ट मान 4 MB है.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests विकल्प स्मृति के उपयोग की लागत पर समानांतर रूप से किए जाने वाले अनुरोधों की संख्या निर्दिष्ट करके, डेटा को तेजी से डाउनलोड करने का समर्थन करता है. आवश्यक मेमोरी (ConcurrentRequest \* RequestSize) है. डिफ़ॉल्ट मान 16 है.</li></ul>



## Category
Accessing data
