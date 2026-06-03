---
title: Time.FromText
---

# Time.FromText


स्थानीय और वैश्विक, कस्टम समय फ़ॉर्मेट से समय बनाता है.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

टेक्स्ट प्रस्तुतिकरण, `text` से `time` मान बनाता है. अतिरिक्त प्रॉपर्टीज़ निर्दिष्ट करने के लिए, एक वैकल्पिक `record` पैरामीटर `options` प्रदान किया जा सकता है. `record` में निम्नलिखित फ़ील्ड हो सकते हैं:

-   `Format`: एक `text` मान, जो यह दर्शाता है कि किस फ़ॉर्मेट का उपयोग करना है. ज़्यादा जानकारी के लिए, https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ने या `null` देने से समय को सर्वश्रेष्ठ प्रयास का उपयोग करके पार्स किया जाएगा.
-   `Culture`: जब `Format` null नहीं होता है, तो `Culture` कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, `"en-US"` में `"tt"` का मान `"AM" या "PM"` होता है, जबकि `"ar-EG"` में `"tt"` का मान `"ص" या "م"` होता है. जब `Format` `null` होता है, तो `Culture` उपयोग किए जाने वाले डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब `Culture` `null` हो या उसे छोड़ दिया जाए, तो `Culture.Current` का उपयोग किया जाता है.

लीगेसी वर्कफ़्लोज़ का समर्थन करने के लिए, `options` एक टेक्स्ट मान भी हो सकता है. इसका व्यवहार वैसा ही है जैसे कि `options = [Format = null, Culture = options]`.


## Examples

### Example #1
`"10:12:31am"` को एक समय मान में रूपांतरित करें.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"` को समय मान में रूपांतरित करें.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"` को समय मान में रूपांतरित करें.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
