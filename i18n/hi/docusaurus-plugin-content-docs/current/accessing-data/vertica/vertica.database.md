---
title: Vertica.Database
---

# Vertica.Database


Vertica से डेटा आयात करें


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

<code>डेटाबेस</code> पैरामीटर द्वारा नामित डेटाबेस में <code>सर्वर</code>पैरामीटर द्वारा नामित सर्वर पर उपलब्ध स्कीमा की तालिका वापस करता है.अतिरिक्त गुण निर्दिष्ट करने के लिए, एक वैकल्पिक पैरामीटर, <code>विकल्प</code>, प्रदान किया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड्स हो सकती हैं:<ul>    <li><code>ConnectionTimeout</code>: वह अवधि, जो इस बात को नियंत्रित करती है कि सर्वर से कनेक्शन बनाने का प्रयास छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान, ड्राइवर आश्रित है. </li>    <li><code>CommandTimeout </code>: वह अवधि, जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले कितने समय तक चलने दिया जा सकता है. डिफ़ॉल्ट मान, ड्राइवर आश्रित है. </li></ul>


## Examples

### Example #1 
Vertica में तालिकाओं को सूचीबद्ध करें
```powerquery

```



