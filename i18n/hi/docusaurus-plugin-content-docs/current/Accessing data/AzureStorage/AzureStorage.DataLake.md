---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Azure Data Lake Storage से एक ऐसी नेविगेशन तालिका लौटाता है, जिसमें निर्दिष्ट किए गए कंटेनर और उसके उप-फ़ोल्डर में पाए गए दस्तावेज़ शामिल हैं.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Azure Data Lake Storage फ़ाइलसिस्टम से एक ऐसी नेविगेशन तालिका लौटाता है जिसमें खाता URL <code>endpoint</code> में निर्दिष्ट किए गए कंटेनर और उसके उप-फ़ोल्डर में पाए गए दस्तावेज़ शामिल हैं. निम्नलिखित विकल्पों को नियंत्रित करने के लिए, <code>options</code> निर्दिष्ट किया जा सकता है:     <ul><li><code>BlockSize</code> : डेटा उपभोक्ता की प्रतीक्षा करने से पहले पढ़ने के लिए बाइट्स की संख्या. डिफ़ॉल्ट मान 4 MB है.</li><li><code>RequestSize</code> : सर्वर से एक ही HTTP अनुरोध में पढ़ने का प्रयास करने के लिए बाइट्स की संख्या. डिफ़ॉल्ट मान 4 MB है.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests विकल्प स्मृति के उपयोग की लागत पर समानांतर रूप से किए जाने वाले अनुरोधों की संख्या निर्दिष्ट करके, डेटा को तेजी से डाउनलोड करने का समर्थन करता है. आवश्यक मेमोरी (ConcurrentRequest \* RequestSize) है. डिफ़ॉल्ट मान 16 है.</li><li><code>HierarchicalNavigation</code> : एक तार्किक (सही/गलत) जो यह नियंत्रित करता है कि फ़ाइलें एक ट्री जैसे डायरेक्टरी दृश्य में या किसी सपाट सूची में वापस लौटी या नहीं. डिफ़ॉल्ट मान गलत है.</li></ul>



## Category
Accessing data
