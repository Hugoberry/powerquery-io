---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Remarks

इस फ़ंक्शन का उपयोग SparkPost API v1 द्वारा प्रस्तुत "सूचियों" के किसी भी समाप्ति बिंदु को कॉल करने के लिए किया जा सकता. इस फ़ंक्शन का उपयोग करके SparkPost API को कॉल करते समय, ध्यान रखें कि SparkPost API की निश्चित API दर सीमा है. यदि आपको SparkPost सर्वर से 429 स्थिति कोड मिलता है, तो इसका मतलब है कि आप दर सीमा तक पहुँच गए हैं और आपको अधिक कॉल करने के लिए कुछ क्षण प्रतीक्षा करनी होगी.


## Examples

### Example #1 
किसी एक SparkPost API v1 &#34;सूची&#34; वाले समाप्ति बिंदु से डेटा से पॉप्यूलेट की गई एकल स्तंभ वाली तालिका लौटाता है (विवरण के लिए SparkPost दस्तावेज़ देखें).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



