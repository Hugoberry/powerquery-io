---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Microsoft Entra ID का उपयोग करके एक Google BigQuery डेटाबेस से डेटा आयात करें


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

`Billing Project ID` के लिए Microsoft Entra ID का उपयोग करके Google BigQuery में उपलब्ध प्रोजेक्ट्स को सूचीबद्ध करने वाली एक तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, `विकल्प` निर्दिष्ट किया जा सकता है:

-   `ConnectionTimeout`: एक अवधि, जो इस बात को नियंत्रित करती है कि सर्वर से कनेक्शन करने के प्रयास को छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान, ODBC कनेक्शन टाइमआउट मान है.
-   `CommandTimeout`: एक अवधि जो यह नियंत्रित करती है कि सर्वर-साइड की क्वेरी को, रद्द किए जाने से पहले, कितनी अवधि के लिए रन किया जा सकता है.
-   `UseStorageApi`: निर्दिष्ट करता है कि बड़े परिणाम सेट के लिए BigQuery Storage API का उपयोग करना है या नहीं. Storage API का उपयोग करने के लिए डिफ़ॉल्ट मान ‘true’ है. Storage API
का उपयोग नहीं करने के लिए ‘false’ पर सेट करें-   `AudienceUri`: यह वो ऑडिएंस URI है जिसका उपयोग ODBC ड्राइवर अपने टोकन exchange अनुरोधों के लिए कर सकता है. यह फ़ील्ड एक पूर्ण क्वालीफ़ाइड URI (अर्थात //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) होनी चाहिए, जहाँ pool\_id कार्यबल पूल की पहचान करने के लिए वैश्विक रूप से अद्वितीय नाम है.

रिकॉर्ड पैरामीटर को \[option1 = value1, option2 = value2...\] के रूप में निर्दिष्ट किया गया है.


## Examples

### Example #1
Microsoft Entra ID का उपयोग करके Google BigQuery में उपलब्ध प्रोजेक्ट्स को सूचीबद्ध करें
```powerquery
GoogleBigQueryAad.Database()
```



