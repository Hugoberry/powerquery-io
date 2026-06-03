---
title: Web.BrowserContents
---

# Web.BrowserContents


किसी वेब ब्राउज़र द्वारा देखे गए अनुसार निर्दिष्ट URL के लिए HTML लौटाता है.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

किसी वेब ब्राउज़र द्वारा देखे गए अनुसार निर्दिष्ट `url` के लिए HTML लौटाता है. एक वैकल्पिक रिकॉर्ड पैरामीटर, `options`, अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड हो सकती हैं:

-   `ApiKeyName`: अगर लक्ष्य साइट में API कुंजी का कोई नोशन है, तो इस पैरामीटर का उपयोग उस कुंजी पैरामीटर का नाम (मान नहीं) निर्दिष्ट करने के लिए किया जा सकता है जिसका URL में उपयोग किया जाना आवश्यक है. वास्तविक कुंजी मान, क्रेडेंशियल में प्रदान किया गया है.
-   `WaitFor`: HTML डाउनलोड करने से पहले प्रतीक्षा करने के लिए एक शर्त निर्दिष्ट करता है, इसके अतिरिक्त पेज के लोड होने की प्रतीक्षा भी करता है (जो हमेशा की जाती है). यह एक रिकॉर्ड हो सकता है जिसमें टाइमआउट और/या सिलेक्टर फ़ील्ड शामिल हों. अगर केवल कोई टाइमआउट निर्दिष्ट किया गया है, तो फ़ंक्शन HTML डाउनलोड करने से पहले निर्दिष्ट समय तक प्रतीक्षा करेगा. अगर सिलेक्टर और टाइमआउट दोनों निर्दिष्ट किए गए हैं और पेज पर सिलेक्टर की मौजूदगी से पहले टाइमआउट समाप्त हो जाता है, तो एक त्रुटि होगी. अगर सिलेक्टर को बिना किसी टाइमआउट के निर्दिष्ट किया गया है, तो 30 सेकंड का एक डिफॉल्ट टाइमआउट लागू होता है.


## Examples

### Example #1
https://microsoft.com के लिए HTML लौटाता है.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
CSS चयनकर्ता दिखने की प्रतीक्षा करने के बाद https://microsoft.com के लिए HTML लौटाता है.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
दस सेकंड प्रतीक्षा करने के बाद https://microsoft.com के लिए HTML लौटाता है.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
CSS चयनकर्ता दिखने की 10 सेकंड तक प्रतीक्षा करने के बाद https://microsoft.com के लिए HTML लौटाता है.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
