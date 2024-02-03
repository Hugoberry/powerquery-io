---
title: Text.Format
---

# Text.Format


## Description

फ़ॉर्मेट स्ट्रिंग और तर्कों से फ़ॉर्मेट किया गया पाठ लौटाता है.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

ऐसा फ़ॉर्मेट किया गया पाठ लौटाता है, जिसे स्ट्रिंग <code>formatString</code> को फ़ॉर्मेट करने के लिए सूची या रिकॉर्ड से <code>arguments</code> को लागू करके बनाया गया है. वैकल्पिक <code>culture</code> प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
संख्या सूची फ़ॉर्मेट करें.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
संयुक्त राज्य अंग्रेज़ी कल्चर के अनुसार रिकॉर्ड से भिन्न डेटा प्रकारों को फ़ॉर्मेट करें.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
