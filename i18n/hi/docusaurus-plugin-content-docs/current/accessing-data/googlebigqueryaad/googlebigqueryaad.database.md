---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Azure AD का उपयोग करके Google BigQuery डेटाबेस से डेटा आयात करें


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      वह तालिका लौटाता है जो <code>बिलिंग प्रोजेक्ट ID</code> के लिए Azure AD का उपयोग करके Google BigQuery में उपलब्ध प्रोजेक्ट को सूचीबद्ध करती है. निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, निर्दिष्ट किया जा सकता है:      <ul>        <li><code>ConnectionTimeout</code>: वह अवधि जो यह नियंत्रित करती है कि सर्वर से कनेक्शन करने का प्रयास छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान ODBC कनेक्शन टाइमआउट मान है.</li>        <li><code>CommandTimeout</code>: वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द करने से पहले उसे कितनी देर तक चलाने की अनुमति है.</li>        <li><code>UseStorageApi</code>:  निर्दिष्ट करता है कि बड़े परिणाम सेट के लिए BigQuery संग्रहण API का उपयोग करना है या नहीं. संग्रहण API का उपयोग करने के लिए डिफ़ॉल्ट मान सही है. संग्रहण API</li>        <li><code>AudienceUri</code> का उपयोग नहीं करने के लिए गलत पर सेट करें: यह ऑडियंस URI है जिसका उपयोग ODBC ड्राइवर अपने टोकन एक्सचेंज अनुरोधों के लिए कर सकता है. यह फ़ील्ड एक पूर्ण क्वालीफ़ाइड URI (उदाहरण //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) होना चाहिए, जहाँ pool_id वर्कफ़ोर्स पूल.</li>      </ul>    रिकॉर्ड पैरामीटर के रूप में निर्दिष्ट किया गया है [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Azure AD का उपयोग करके Google BigQuery में उपलब्ध प्रोजेक्ट्स सूचीबद्ध करें
```powerquery
GoogleBigQueryAad.Database()
```



