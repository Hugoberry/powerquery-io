---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Adobe Analytics में रिपोर्ट सुइट्स लौटाता है.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Adobe Analyics से बहुआयामी पैकेज की तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, `options`, निर्दिष्ट किया जा सकता है:

-   `HierarchicalNavigation` : तार्किक (सही/गलत) जो कि यह निर्धारित करता है कि तालिकाओं को उनके स्कीमा नामों के आधार पर समूहीकृत रूप में देखना है या नहीं (डिफ़ॉल्ट गलत है).
-   `MaxRetryCount` : क्वेरी के परिणाम के लिए पोलिंग करते समय पुनर्प्रयास की संख्या. डिफ़ॉल्ट मान 120 है.
-   `RetryInterval` : पुनर्प्रयास के बीच समय की अवधि. डिफ़ॉल्ट मान 1 सेकंड है.
-   `Implementation` : Adobe Analytics API संस्करण निर्दिष्ट करता है. मान्य मान हैं: "2.0". डिफ़ॉल्ट API संस्करण 1.4 का उपयोग करता है.



## Category
Accessing data
