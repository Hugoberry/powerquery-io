---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

HDInsight Interactive Query से डेटा आयात करें


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

HDInsight Interactive Query <code>सर्वर</code> पर <code>डेटाबेस</code> द्वारा निर्दिष्ट HDInsight Interactive Query से तालिकाओं की सूची लौटाता है। कोलन द्वारा सेपरेडेट पोर्ट संख्या सर्वर के साथ वैकल्पिक रूप से निर्दिष्ट की जा सकती है। निम्न विकल्पों को नियंत्रित करने के लिए कोई वैकल्पिक <code>विकल्प</code> पैरामीटर निर्दिष्ट किए जा सकते हैं:<ul>        <li><code>ConnectionTimeout</code>: वह अवधि, जो इस बात को नियंत्रित करती है कि सर्वर से कनेक्शन करने का प्रयास छोड़ने से पहले कितनी देर प्रतीक्षा करनी है। डिफ़ॉल्ट मान ड्राइवर-आश्रित है।</li>        <li><code>CommandTimeout</code>: वह अवधि, जो इस बात को नियंत्रित करती है कि रद्द किए जाने से पहले सर्वर-साइड क्वेरी कितनी देर तक चलाने की अनुमति है। डिफ़ॉल्ट मान ड्राइवर-आश्रित है।</li></ul> <code>विकल्प</code> पैरामीटर [option1 = value1, option2 = value2...] के रूप में निर्दिष्ट किया जाता है।


