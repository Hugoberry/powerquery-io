---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


निर्दिष्ट आयाम तालिका को क्यूब के फ़िल्टर संदर्भ में मर्ज करता है और आयाम विशेषताओं के निर्दिष्ट सेट को विस्तृत करके फ़िल्टर संदर्भ की आयाम ग्रैन्‍यूलेरिटी को बदलता है.


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

निर्दिष्ट आयाम तालिका `dimensionSelector` को `cube` के फ़िल्टर संदर्भ में मर्ज करता है और आयाम विशेषताओं के निर्दिष्ट सेट `attributeNames` को विस्तृत करके आयाम ग्रैन्‍यूलेरिटी को परिवर्तित करता है. आयाम विशेषताएं तालिका दृश्य में `newColumnNames`, या अगर निर्दिष्ट नहीं है तो `attributeNames` नामित स्तंभों के साथ जोड़ी जाती हैं।



## Category
Cube
