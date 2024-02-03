---
title: Json.FromValue
---

# Json.FromValue


## Description

दिए गए मान की JSON प्रस्तुति बनाता है.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

<code>encoding</code> द्वारा निर्दिष्ट पाठ एन्कोडिंग के साथ किसी दिए गए मान <code>value</code> की JSON प्रस्तुति बनाता है. यदि <code>encoding</code> को छोड़ा जाता है, तो UTF8 का उपयोग किया जाता है. मानों को निम्न प्रकार से प्रस्तुत किया जाता है:<br /> <ul>        <li>नल, पाठ और तार्किक मानों को संगत JSON प्रकार के रूप में प्रस्तुत किया जाता है</li>        <li>संख्याओं को JSON में संख्याओं के रूप में प्रस्तुत किया जाता है, केवल <code>#infinity</code>, <code>-#infinity</code> और <code>#nan</code> नल में रूपांतरित किए जाते हैं</li>        <li>सूचियों को JSON सर्वर-समूह के रूप में प्रस्तुत किया जाता है </li>        <li>रिकॉर्ड JSON ऑब्जेक्ट के रूप में प्रस्तुत किया जाते हैं</li>        <li>तालिकाओं को ऑब्जेक्ट को सर्वर-समूह के रूप में प्रस्तुत किया जाता है</li>        <li>दिनांक, समय, तिथिसमय, तिथिसमयक्षेत्र और समयावधियों को ISO-8601 पाठ के रूप में प्रस्तुत किया जाता है</li>        <li>बाइनरी मान, बेस-64 एनकोडेड पाठ के रूप में प्रस्तुत किए जाते हैं</li>        <li>प्रकार और फ़ंक्शन कोई त्रुटि उत्पन्न करते हैं</li> </ul>    


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
