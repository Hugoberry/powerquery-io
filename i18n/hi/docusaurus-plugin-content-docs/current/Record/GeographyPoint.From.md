---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

भागों से भौगोलिक बिंदु को दर्शाने वाला एक रिकॉर्ड बनाता है.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

अपने घटक भाग, जैसे देशांतर, अक्षांश, और यदि मौजूद हो तो ऊँचाई (Z) और माप (M) से भौगोलिक बिंदु को दर्शाने वाला एक रिकॉर्ड बनाता. डिफ़ॉल्ट मान (4326) से भिन्न होने पर एक वैकल्पिक स्पेशल रेफ़रेंस आइडेंटिफ़ायर (SRID) दिया जा सकता है.



## Category
Record.Serialization
