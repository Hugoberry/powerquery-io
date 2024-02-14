---
title: DocumentDB.Contents
---

# DocumentDB.Contents


किसी Azure Cosmos DB खाते का URL दर्ज करें.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

<code>url</code> पर Azure Cosmos DB डेटाबेस की तालिका वापस करता है. अगर <code>डेटाबेस</code> निर्दिष्ट किया गया है, तो इसके बजाय संग्रह की तालिका वापस की जाएगी. इसके अतिरिक्त, अगर <code>विकल्प</code>रिकॉर्ड में <code>क्वेरी</code> फ़ील्ड निर्दिष्ट की गई है तो या तो निर्दिष्ट किए गए डेटाबेस और/या संग्रह पर निष्पादित की जा रही क्वेरी के परिणाम वापस किए जाएँगे.


