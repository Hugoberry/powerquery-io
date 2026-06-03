---
title: Json.FromValue
---

# Json.FromValue


दिए गए मान की JSON प्रस्तुति बनाता है.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

किसी दिए गए मान `value` का JSON प्रतिनिधित्व `encoding` द्वारा निर्दिष्ट टेक्स्ट एन्कोडिंग के साथ उत्पन्न करता है. अगर `encoding` को छोड़ दिया जाता है, तो UTF8 का उपयोग किया जाता है. मानों को निम्न प्रकार से प्रस्तुत किया जाता है:

-   नल, टेक्स्ट और तार्किक मानों को संगत JSON प्रकार के रूप में प्रस्तुत किया जाता है
-   JSON में संख्याएँ, संख्याओं के रूप में दर्शाई जाती हैं, सिवाय इसके कि `#infinity`, `-#infinity` और `#nan` को नल में बदल दिया जाता है
-   सूचियाँ JSON सरणियों के रूप में दर्शाई जाती हैं
-   रिकॉर्ड्स JSON ऑब्जेक्ट्स रूप में प्रदर्शित किए जाते हैं
-   तालिकाओं को ऑब्जेक्ट की एक सरणी के रूप में दर्शाया जाता है
-   दिनांक, समय, datetimes, datetimezones और अवधियों को ISO-8601 टेक्स्ट के रूप में दर्शाया जाता है
-   बाइनरी मान, बेस-64 एनकोडेड टेक्स्ट के रूप में प्रस्तुत किए जाते हैं
-   प्रकार और फ़ंक्शन कोई त्रुटि उत्पन्न करते हैं


## Examples

### Example #1
जटिल मान को JSON में रूपांतरित करें.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
