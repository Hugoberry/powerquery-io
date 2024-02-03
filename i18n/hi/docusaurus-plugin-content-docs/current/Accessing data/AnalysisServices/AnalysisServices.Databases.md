---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

विशेष होस्ट पर Analysis सेवा डेटाबेस लौटाता है.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Analysis सेवा इंस्टैंस, <code>server</code> पर डेटाबेस लौटाता है. एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, अतिरिक्त गुण निर्दिष्ट करने के लिए प्रदान किया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड हो सकते हैं:    <ul><li><code>TypedMeasureColumns</code> : ग़लत पर सेट होने पर, &#39;&#39;संख्या&#39;&#39; प्रकार का उपयोग सभी माप स्तंभों के लिए किया जाएगा. इस विकल्प के लिए डिफ़ॉल्ट मान ग़लत है.</li><li><code>Culture</code> : कल्चर नाम डेटा के लिए कल्चर निर्दिष्ट करता है. यह &#39;लोकेल आइडेंटिफ़ायर&#39; कनेक्शन स्ट्रिंग गुण के समतुल्य होता है.</li><li><code>CommandTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द करने से पहले उसे कितनी देर तक चलाने की अनुमति दी गई है. डिफ़ॉल्ट मान, ड्राइवर पर निर्भर है.</li><li><code>ConnectionTimeout</code> : एक अवधि जो यह नियंत्रित करती है कि सर्वर से कनेक्शन करने का प्रयास छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान, ड्राइवर पर निर्भर है.</li><li><code>SubQueries</code> : एक संख्या (0, 1 या 2) जो कनेक्शन स्ट्रिंग में &quot;SubQueries&quot; गुण का मान सेट करती है. यह उपचयन या उपक्यूब्स पर परिकलित सदस्यों का व्यवहार नियंत्रित करता है. (डिफ़ॉल्ट मान 2 है).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
