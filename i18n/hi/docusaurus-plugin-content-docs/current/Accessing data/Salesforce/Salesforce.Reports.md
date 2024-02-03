---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Salesforce खाते से रिपोर्ट लौटाता है.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

क्रेडेंशियल में प्रदान किए गए Salesforce खाते पर रिपोर्ट्स लौटाता है. खाते को प्रदान किए गए परिवेश <code>loginUrl</code> के द्वारा कनेक्ट किया जाएगा. यदि कोई परिवेश प्रदान नहीं किया जाता है, तब खाता निर्माण (https://login.salesforce.com) से कनेक्ट होगा. वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड हो सकते हैं:    <ul><li><code>ApiVersion</code> : इस क्वेरी के लिए उपयोग करने हेतु Salesforce API संस्करण. जब निर्दिष्ट नहीं किया गया हो, तो API संस्करण 29.0 उपयोग किया जाता है.</li><li><code>Timeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर का अनुरोध छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान स्रोत-विशिष्ट है.</li></ul>    



## Category
Accessing data
