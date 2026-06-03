---
title: Date.ToText
---

# Date.ToText


दिनांक मान का पाठ प्रस्तुतिकरण लौटाता है.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`date` का एक टेक्स्ट प्रस्तुतिकरण लौटाता है. अतिरिक्त प्रॉपर्टीज़ निर्दिष्ट करने के लिए, एक वैकल्पिक `record` पैरामीटर `options` प्रदान किया जा सकता है. `culture` का उपयोग केवल लेगेसी वर्कफ़्लो के लिए किया जाता है. `record` में निम्नलिखित फ़ील्ड हो सकते हैं:

-   `Format`: एक `text` मान, जो यह दर्शाता है कि किस फ़ॉर्मेट का उपयोग करना है. अधिक जानकारी के लिए, https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ने या `null` देने पर, `Culture` द्वारा निर्धारित डिफ़ॉल्ट फ़ॉर्मेट का उपयोग करके दिनांक को फ़ॉर्मेट किया जाएगा.
-   `Culture`: जब `Format` null नहीं होता है, तो `Culture` कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, `"en-US"` में `"MMM"` का मतलब `"Jan", "Feb", "Mar", ...` होता है, जबकि `"ru-RU"` में `"MMM"` का मतलब `"янв", "фев", "мар", ...` होता है. जब `Format` `null` होता है, तो `Culture` उपयोग किए जाने वाले डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब `Culture` `null` हो या उसे छोड़ दिया जाए, तो `Culture.Current` का उपयोग किया जाता है.

लीगेसी वर्कफ़्लो का समर्थन करने के लिए, `options` और `culture` टेक्स्ट मान भी हो सकते हैं. इसका व्यवहार वैसा ही है जैसे कि `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
`#date(2010, 12, 31)` को `पाठ` मान में रूपांतरित करें. *परिणाम आउटपुट वर्तमान कल्चर के आधार पर भिन्न हो सकता है.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
कस्टम फ़ॉन्ट और जर्मन कल्चर का उपयोग करके रूपांतरित करें.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
हिजरी कैलेंडर में वह वर्ष ढूँढें जो ग्रेगोरियन कैलेंडर में 1 जनवरी, 2000 से संगत है.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
