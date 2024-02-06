---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


निर्दिष्ट आयाम तालिका को क्यूब के फ़िल्टर संदर्भ में मर्ज करता है और आयाम विशेषताओं के निर्दिष्ट सेट को विस्तृत करके फ़िल्टर संदर्भ की आयाम ग्रैन्युलैरिटी को बदलता है.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

निर्दिष्ट आयाम तालिका, <code>dimensionSelector</code>, को क्यूब के, <code>cube</code>, फ़िल्टर संदर्भ में मर्ज करता है और आयाम विशेषताओं के निर्दिष्ट सेट, <code>attributeNames</code>, को विस्तृत करके फ़िल्टर संदर्भ की आयाम ग्रैन्युलैरिटी को बदलता है. यदि निर्दिष्ट नहीं किया गया होता है, तो आयाम विशेषताओं को <code>newColumnNames</code> या <code>attributeNames</code> नामित स्तंभों वाली तालिका दृश्य में जोड़ा जाता है.



## Category
Cube
