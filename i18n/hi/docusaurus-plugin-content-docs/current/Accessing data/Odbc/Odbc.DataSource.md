---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

ODBC डेटा स्रोत से SQL तालिकाओं की एक तालिका और दृश्य लौटाता है. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

कनेक्शन स्ट्रिंग <code>connectionString</code> द्वारा निर्दिष्ट किए गए ODBC डेटा स्रोत से SQL तालिकाओं और दृश्यों की तालिका वापस करता है. <code>connectionString</code> कोई पाठ या गुण मान जोड़ियों का रिकॉर्ड हो सकता है. गुण मान पाठ या संख्या हो सकती हैं. हो सकता है कि अतिरिक्त गुणों को निर्दिष्ट करने के लिए वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code> प्रदान किया जाए. रिकॉर्ड में निम्न फ़ील्ड शामिल हो सकते हैं:    <ul><li><code>CreateNavigationProperties</code> : लॉजिकल (सही/गलत) जो यह निर्धारित करता है कि नेविगेशन गुणों को लौटाए गए मानों पर जनरेट करना है या नहीं (डिफ़ॉल्ट सही है).</li><li><code>HierarchicalNavigation</code> : तार्किक (सही/गलत) जो कि यह निर्धारित करता है कि तालिकाओं को उनके स्कीमा नामों के आधार पर समूहीकृत रूप में देखना है या नहीं (डिफ़ॉल्ट गलत है).</li><li><code>ConnectionTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर से कनेक्शन करने का प्रयास छोड़ने से पहले कितनी देर प्रतीक्षा करनी है. डिफ़ॉल्ट मान 15 सेकंड है.</li><li><code>CommandTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले उसे कितनी देर तक चलाने की अनुमति दी गई है. डिफ़ॉल्ट मान दस मिनट होता है.</li><li><code>SqlCompatibleWindowsAuth</code> : एक तार्किक (सही/गलत) है जो कि यह निर्धारित करता है कि Windows प्रमाणीकरण के लिए SQL Server संगत कनेक्शन स्ट्रिंग विकल्पों को निर्मित किया जाना है या नहीं. डिफ़ॉल्ट मान सही है.</li></ul>


## Examples

### Example #1 
दी गई कनेक्शन स्ट्रिंग से SQL तालिकाएँ और दृश्य लौटाना.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
