---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

ऐसी नेविगेशन संबंधी तालिका लौटाता है जिसमें किसी Azure संग्रहण वॉल्ट से निर्दिष्ट खाते में प्राप्त कंटेनर शामिल होते हैं.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Azure संग्रहण वॉल्ट से एक ऐसी नेविगेशन संबंधी तालिका लौटाता है जिसमें खाता URL <code>account</code> से प्राप्त प्रत्येक कंटेनर के लिए एक पंक्ति शामिल होती है. प्रत्येक पंक्ति में कंटेनर ब्लॉब का लिंक होता है. निम्नलिखित विकल्पों को नियंत्रित करने के लिए, <code>options</code> निर्दिष्ट किया जा सकता है:     <ul><li><code>BlockSize</code> : डेटा उपभोक्ता की प्रतीक्षा करने से पहले पढ़ने के लिए बाइट्स की संख्या. डिफ़ॉल्ट मान 4 MB है.</li><li><code>RequestSize</code> : सर्वर से एक ही HTTP अनुरोध में पढ़ने का प्रयास करने के लिए बाइट्स की संख्या. डिफ़ॉल्ट मान 4 MB है.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests विकल्प स्मृति के उपयोग की लागत पर समानांतर रूप से किए जाने वाले अनुरोधों की संख्या निर्दिष्ट करके, डेटा को तेजी से डाउनलोड करने का समर्थन करता है. आवश्यक मेमोरी (ConcurrentRequest \* RequestSize) है. डिफ़ॉल्ट मान 16 है.</li></ul>



## Category
Accessing data
