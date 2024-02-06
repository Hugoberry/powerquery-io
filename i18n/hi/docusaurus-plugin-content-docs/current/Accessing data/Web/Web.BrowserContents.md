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

निर्दिष्ट <code>url</code> के लिए HTML लौटाता है, जैसा कि किसी वेब ब्राउजर द्वारा देखा जाता है. अतिरिक्त गुणों को निर्दिष्ट करने के लिए एक वैकल्पिक रिकॉर्ड पैरामीटर <code>options</code> उपलब्ध कराया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड शामिल हो सकते हैं:     <ul>        <li><code>ApiKeyName</code>: अगर लक्ष्य साइट में API कुंजी का कोई नोशन है, तो इस पैरामीटर का उपयोग उस कुंजी पैरामीटर का नाम (मान नहीं) निर्दिष्ट करने के लिए किया जा सकता है जिसका URL में उपयोग किया जाना आवश्यक है. वास्तविक कुंजी मान क्रेडेंशियल में दिया गया है.</li>        <li><code>WaitFor</code>: पेज लोड होने के लिए की जाने वाली प्रतीक्षा (जो हमेशा की जाती है) के अतिरिक्त HTML डाउनलोड करने से पहले प्रतीक्षा करने की किसी शर्त को निर्दिष्ट करता है. Timeout और/या Selector फ़ील्ड शामिल रहने वाला कोई रिकॉर्ड हो सकता है. अगर केवल कोई Timeout निर्दिष्ट किया गया है, तो फ़ंक्शन HTML डाउनलोड होने से पहले निर्दिष्ट समय की मात्रा के अनुसार प्रतीक्षा करेगा. अगर कोई Selector और Timeout दोनों निर्दिष्ट किए गए हैं और पृष्ठ पर Selector की मौजूदगी बने रहने से पहले ही Timeout समाप्त हो जाता है, तो एक त्रुटि दिखाई जाएगी. अगर Selector को बिना किसी Timeout के निर्दिष्ट किया गया है, तो 30 सेकंड का एक डिफॉल्ट Timeout लागू होता है.</li>      </ul>    


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
Web.BrowserContents("https://microsoft.com", [[टाइमऑउट = #अवधि(0,0,0,10)] = के लिए प्रतीक्षा करें])
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
डेटा पर पहुँच प्राप्त करना
