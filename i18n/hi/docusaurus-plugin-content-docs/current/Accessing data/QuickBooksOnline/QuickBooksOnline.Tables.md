---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

QuickBooks Online से डेटा आयात करें.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        QuickBooks Online में मौजूद तालिकाओं की तालिका सूची वापस करता है. एक वैकल्पिक रिकॉर्ड पैरामीटर <code>विकल्प</code> को निम्न विकल्पों को नियंत्रित करने के लिए निर्दिष्ट किया जा सकता है :          <ul> <li><code>ConnectionTimeout</code>: वह अवधि, जो इस बात को नियंत्रित करती है कि सर्वर से कनेक्शन बनाने का प्रयास करना छोड़ने से पहले कितनी देर प्रतीक्षा करनी है.</li>            <li><code>CommandTimeout</code>: वह अवधि, जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले कितनी अवधि के लिए चलने दिया जा सकता है.</li>          </ul>        रिकॉर्ड पैरामीटर [option1 = value1, option2 = value2...] के रूप में निर्दिष्ट किया गया है.


