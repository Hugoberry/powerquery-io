---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Essbase सर्वर द्वारा समूहीकृत Essbase इंस्टैंस में क्यूब लौटाता है.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

APS सर्वर <code>url</code> पर Essbase इंस्टेंस से Essbase सर्वर द्वारा समूहीकृत क्यूब की तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code> निर्दिष्ट किया जा सकता है:    <ul><li><code>CommandTimeout</code> : वह अवधि जो यह नियंत्रित करती है कि सर्वर-साइड क्वेरी को रद्द किए जाने से पहले उसे कितनी देर तक चलाने की अनुमति दी गई है. डिफ़ॉल्ट मान दस मिनट होता है.</li></ul>



## Category
Accessing data
