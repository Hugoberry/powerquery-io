---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

किसी ADO.NET डेटा स्रोत के लिए स्कीमा संग्रह प्रदान करता है.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

प्रदाता नाम <code>providerName</code> और कनेक्शन स्ट्रिंग <code>connectionString</code> सहित ADO.NET डेटा स्रोत के लिए स्कीमा संग्रह वापस करता है. <code>connectionString</code> पाठ या किसी गुण मान जोड़ी का रिकॉर्ड हो सकता है. गुण मान या तो पाठ या संख्या हो सकती हैं. हो सकता है कि अतिरिक्त गुणों को निर्दिष्ट करने के लिए वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code> प्रदान किया जाए. रिकॉर्ड में निम्न फ़ील्ड शामिल हो सकते हैं:    <ul><li><code>CommandTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले उसे कितनी देर तक चलाने की अनुमति दी गई है. डिफ़ॉल्ट मान दस मिनट होता है.</li><li><code>SqlCompatibleWindowsAuth</code> : एक तार्किक (सही/गलत) है जो कि यह निर्धारित करता है कि Windows प्रमाणीकरण के लिए SQL Server संगत कनेक्शन स्ट्रिंग विकल्पों को निर्मित किया जाना है या नहीं. डिफ़ॉल्ट मान सही है.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
