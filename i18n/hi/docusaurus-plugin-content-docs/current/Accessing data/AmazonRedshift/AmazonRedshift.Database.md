---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Amazon Redshift डेटाबेस से डेटा आयात करें.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

डेटाबेस <code>database</code> में Amazon Redshift क्लस्टर <code></code> पर तालिकाओं को सूचीबद्ध करने वाली तालिका लौटाता है.  निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>विकल्प</code>, निर्दिष्ट किया जा सकता है:<ul><li><code>प्रदाता नाम</code>: कनेक्शन के लिए प्रदाता नाम के रूप में उपयोग किया जाने वाला पाठ मान. इसका उपयोग Microsoft प्रमाणीकरण का उपयोग करते समय किया जाता है.</li><li><code>बैच आकार</code>: पंक्तियों की संख्या जिन्हें एकल कॉल में सर्वर में फ़ेच किया जाता है. </li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



