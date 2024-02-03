---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

किसी हाइव LLAP से डेटा आयात करें


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

चयनित <code>प्रोटोकॉल</code> का उपयोग करके Hive LLAP <code>सर्वर</code> पर <code>डेटाबेस</code> द्वारा निर्दिष्ट Hive LLAP से तालिकाओं की सूची लौटाता है. पोर्ट संख्या सर्वर के साथ वैकल्पिक रूप से निर्दिष्ट हो सकती है, जो कोलन से विभाजित होती है. थ्रिफ़्ट ट्रांसपोर्ट प्रोटोकॉल "मानर", "HTTP" मान के साथ इन्युमरेटेड प्रकार है. निम्नलिखित विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक <code>विकल्प</code> पैरामीटर निर्दिष्ट हो सकता है:<ul>        <li><code>ConnectionTimeout</code>: वह अवधि जो यह नियंत्रित करती है कि सर्वर से कनेक्शन बनाने का प्रयास करना छोड़ने से पहले कितने समय तक प्रतीक्षा करना है. डिफ़ॉल्ट मान ड्राइवर-आश्रित है.</li>        <li><code>CommandTimeout</code>: वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले कितने समय तक चलाए जाने की अनुमति है. डिफ़ॉल्ट मान ड्राइवर-आश्रित है.</li></ul><code>विकल्प</code>पैरामीटर [option1 = value1, option2 = value2...] के रूप में निर्दिष्ट है.


