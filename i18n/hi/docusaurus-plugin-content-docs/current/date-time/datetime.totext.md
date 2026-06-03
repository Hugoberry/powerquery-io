---
title: DateTime.ToText
---

# DateTime.ToText


datetime मान का पाठ प्रस्तुतिकरण लौटाता है.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`dateTime` का एक टेक्स्ट प्रस्तुतिकरण लौटाता है. अतिरिक्त प्रॉपर्टीज़ निर्दिष्ट करने के लिए, एक वैकल्पिक `record` पैरामीटर `options` प्रदान किया जा सकता है. `culture` का उपयोग केवल लेगेसी वर्कफ़्लो के लिए किया जाता है. `record` में निम्नलिखित फ़ील्ड हो सकते हैं:

-   `Format`: एक `text` मान, जो यह दर्शाता है कि किस फ़ॉर्मेट का उपयोग करना है. अधिक जानकारी के लिए, https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ने या `null` देने पर, `Culture` द्वारा निर्धारित डिफ़ॉल्ट फ़ॉर्मेट का उपयोग करके दिनांक को फ़ॉर्मेट किया जाएगा.
-   `Culture`: जब `Format` null नहीं होता है, तो `Culture` कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, `"en-US"` में `"MMM"` का मतलब `"Jan", "Feb", "Mar", ...` होता है, जबकि `"ru-RU"` में `"MMM"` का मतलब `"янв", "фев", "мар", ...` होता है. जब `Format` `null` होता है, तो `Culture` उपयोग किए जाने वाले डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब `Culture` `null` हो या उसे छोड़ दिया जाए, तो `Culture.Current` का उपयोग किया जाता है.

लीगेसी वर्कफ़्लो का समर्थन करने के लिए, `options` और `culture` टेक्स्ट मान भी हो सकते हैं. इसका व्यवहार वैसा ही है जैसे कि `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
`#datetime(2010, 12, 31, 01, 30, 25)` को `text` मान में रूपांतरित करें. *परिणाम आउटपुट वर्तमान कल्चर के आधार पर भिन्न हो सकता है.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
कस्टम फ़ॉन्ट और जर्मन कल्चर का उपयोग करके रूपांतरित करें.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
ISO 8601 पैटर्न का उपयोग करके रूपांतरित करें.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
