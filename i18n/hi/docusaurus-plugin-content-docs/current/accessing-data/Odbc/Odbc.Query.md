---
title: Odbc.Query
---

# Odbc.Query


ODBC डेटा स्रोत पर नेटिव क्‍वेरी चलाने का परिणाम लौटाता है.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

ODBC का उपयोग करके कनेक्शन स्ट्रिंग <code>connectionString</code> के साथ <code>query</code> को चलाने का परिणाम वापस करता है. <code>connectionString</code>, गुण मान जोड़ियों का पाठ या रिकॉर्ड हो सकता है. गुण मान या तो पाठ या संख्या हो सकते हैं. हो सकता है कि अतिरिक्त गुणों को निर्दिष्ट करने के लिए वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code> हो सकता है कि अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया गया हो. रिकॉर्ड में निम्न फ़ील्ड शामिल हो सकते हैं    <ul><li><code>ConnectionTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर से कनेक्शन करने का प्रयास छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान 15 सेकंड है.</li><li><code>CommandTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले उसे कितनी देर तक चलाने की अनुमति दी गई है. डिफ़ॉल्ट मान दस मिनट होता है.</li><li><code>SqlCompatibleWindowsAuth</code> : एक तार्किक (सही/गलत) है जो कि यह निर्धारित करता है कि Windows प्रमाणीकरण के लिए SQL Server संगत कनेक्शन स्ट्रिंग विकल्पों को निर्मित किया जाना है या नहीं. डिफ़ॉल्ट मान सही है.</li></ul>


## Examples

### Example #1 
दी गई कनेक्शन स्ट्रिंग के लिए साधारण क्वेरी चलाने का परिणाम लौटाना.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
