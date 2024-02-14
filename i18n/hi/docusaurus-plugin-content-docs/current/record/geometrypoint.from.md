---
title: GeometryPoint.From
---

# GeometryPoint.From


भागों से ज्यामितीय बिंदु दर्शाने वाला एक रिकॉर्ड बनाता है.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Remarks

अपने घटक भाग, जैसे X निर्देशांक, Y निर्देशांक, और यदि मौजूद हो तो Z निर्देशांक और माप (M) से ज्यामितीय बिंदु को दर्शाने वाला एक रिकॉर्ड बनाता है. डिफ़ॉल्ट मान (0) से भिन्न होने पर एक वैकल्पिक स्पेशल रेफ़रेंस आइडेंटिफ़ायर (SRID) दिया जा सकता है.



## Category
Record.Serialization
