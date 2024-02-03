---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Snowflake कंप्यूटिंग वेयरहाउस से डेटा आयात करें.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

<code>सर्वर</code> पर मौजूद Snowflake कंप्यूटिंग <code>वेयरहाउस</code> में तालिकाओं को सूचीबद्ध करने वाली कोई तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए कोई वैकल्पिक रिकॉर्ड पैरामीटर, <code>विकल्प</code>, निर्दिष्ट किया जा सकता है: <ul><li><code>भूमिका</code>: कनेक्शन के लिए भूमिका नाम के रूप में उपयोग किए जाने के लिए एक पाठ मान.</li><li><code>CreateNavigationProperties</code>: कोई तार्किक (सही/गलत) मान जो सेट करता है कि क्या लौटाए गए मानों पर नेविगेशन गुण जनरेट करना है (डिफ़ॉल्ट सही है) </li><li><code>ConnectionTimeout</code>: Snowflake से नेटवर्क के जवाबों के लिए प्रतीक्षा समय के सेकंड की संख्या.</li><li><code>CommandTimeout</code>: किसी क्वेरी के निष्पादित होने के प्रतीक्षा समय के सेकंड की संख्या.</li></ul>    


## Examples

### Example #1 
किसी Snowflake वेयरहाउस में तालिकाओं को सूचीबद्ध करें.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



