---
title: Parquet.Document
---

# Parquet.Document


पार्के दस्तावेज़ को एक तालिका के रूप लौटाता है.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Parquet दस्तावेज़ की सामग्रियों को तालिका के रूप में लौटाता है. विकल्पों में शामिल हैं: <ul> <li> <code>TypeMapping</code> : वह टेक्स्ट मान जो फ़ाइलों को पढ़ते और लिखते समय डिफ़ॉल्ट प्रकार की मैपिंग को नियंत्रित करता है. डिफ़ॉल्ट मान शून्य है और मूल प्रकार के प्रति जितनी हो सके उतनी निष्ठा बनाएँ रखने का प्रयास करता है. "Sql" का एक मूल्य Sql सर्वर के साथ सबसे अधिक संगत परिणाम देगा.</li> </ul>



## Category
डेटा पर पहुँच प्राप्त करना
