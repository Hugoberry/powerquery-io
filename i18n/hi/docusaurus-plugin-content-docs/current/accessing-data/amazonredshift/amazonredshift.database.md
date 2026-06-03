---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Amazon Redshift डेटाबेस से डेटा आयात करें.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

डेटाबेस `database` में Amazon Redshift क्लस्टर `server` पर तालिकाओं को सूचीबद्ध करने वाली एक तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर`options` निर्दिष्ट किया जा सकता है:

-   `प्रदाता का नाम`: कनेक्शन के लिए प्रदाता नाम के रूप में उपयोग किया जाने वाला टेक्स्ट मान. इसका उपयोग, Microsoft Authentication का उपयोग करते समय किया जाता है.
-   `बैच आकार`: सर्वर पर एकल कॉल में फ़ेच की गई पंक्तियों की संख्या.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



