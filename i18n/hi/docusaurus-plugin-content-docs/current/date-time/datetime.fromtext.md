---
title: DateTime.FromText
---

# DateTime.FromText


स्थानीय और वैश्विक datetime स्वरूपों से एक datetimezone बनाता है.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

एक टेक्स्ट रूप से `datetime` मान बनाता है, `text`. अतिरिक्त प्रॉपर्टीज़ निर्दिष्ट करने के लिए, एक वैकल्पिक `record` पैरामीटर `options` प्रदान किया जा सकता है. `record` में निम्नलिखित फ़ील्ड हो सकते हैं:

-   `Format`: एक `text` मान, जो यह दर्शाता है कि किस फ़ॉर्मेट का उपयोग करना है. ज़्यादा जानकारी के लिए, https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ देने या `null` देने पर, तारीख को सबसे अच्छे तरीके से पार्स करने की कोशिश की जाएगी.
-   `Culture`: जब `Format` null नहीं होता है, तो `Culture` कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, `"en-US"` में `"MMM"` का मतलब `"Jan", "Feb", "Mar", ...` होता है, जबकि `"ru-RU"` में `"MMM"` का मतलब `"янв", "фев", "мар", ...` होता है. जब `Format` `null` होता है, तो `Culture` उपयोग किए जाने वाले डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब `Culture` `null` हो या उसे छोड़ दिया जाए, तो `Culture.Current` का उपयोग किया जाता है.

लीगेसी वर्कफ़्लोज़ का समर्थन करने के लिए, `options` एक टेक्स्ट मान भी हो सकता है. इसका व्यवहार वैसा ही है जैसे कि `options = [Format = null, Culture = options]`.


## Examples

### Example #1
`"2010-12-31T01:30:00"` को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
`"2010-12-31T01:30:00.121212"` को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
`"2010-12-31T01:30:00"` को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
`"20101231T013000"` को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
