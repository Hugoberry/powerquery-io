---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Google BigQuery डेटाबेस से डेटा आयात करें.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Google BigQuery में उपलब्ध प्रोजेक्ट्स को सूचीबद्ध करने वाली तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, निर्दिष्ट किया जा सकता है:     <ul>        <li><code>ConnectionTimeout</code>: वह अवधि जो यह नियंत्रित करती है कि सर्वर से कनेक्शन करने की कोशिश छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान ODBC कनेक्शन टाइमआउट मान है.</li>        <li><code>CommandTimeout</code>: वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले कितनी देर तक चलाने की अनुमति है.</li>        <li><code>BillingProject</code>:  बिलिंग प्रोजेक्ट id. डिफ़ॉल्ट मान पहला उपलब्ध project.</li> <li><code>UseStorageApi</code>: निर्दिष्ट करता है कि बड़े परिणाम सेट के लिए BigQuery संग्रहण API का उपयोग करना है या नहीं. संग्रहण API का उपयोग करने के लिए डिफ़ॉल्ट मान सही है. संग्रहण API का उपयोग नहीं करने के लिए गलत पर सेट करें</li>      </ul>    रिकॉर्ड पैरामीटर को [option1 = value1, option2 = value2...] के रूप में निर्दिष्ट किया गया है.    


## Examples

### Example #1 
Google BigQuery में मौजूद प्रोजेक्‍ट्स को सूचीबद्ध करें
```powerquery
GoogleBigQuery.Database()
```



