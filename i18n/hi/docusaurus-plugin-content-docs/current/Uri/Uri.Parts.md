---
title: Uri.Parts
---

# Uri.Parts


## Description

रिकॉर्ड के रूप में इनपुट पूर्ण URI के भाग लौटाता है.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

रिकॉर्ड के रूप में इनपुट <code>absoluteUri</code> के भागों को लौटाता है, जिसमें मान जैसे कि स्कीम, होस्ट, पोर्ट, पथ, क्वेरी, फ़्रैगमेंट, उपयोगकर्ता नाम और पासवर्ड शामिल होते हैं.


## Examples

### Example #1 
पूर्ण URI &#34;www.adventure-works.com&#34; के भागों को ढूँढें.
```powerquery
Uri.Parts("www.adventure-works.com")
```

Result: 
```powerquery
[
    Scheme = "http",
    Host = "www.adventure-works.com",
    Port = 80,
    Path = "/",
    Query = [],
    Fragment = "",
    UserName = "",
    Password = ""
]
```


### Example #2 
प्रतिशत द्वारा एनकोड किया गया स्ट्रिंग डिकोड करें.
```powerquery
let
    UriUnescapeDataString = (data as text) as text => Uri.Parts("http://contoso?a=" & data)[Query][a]
in
    UriUnescapeDataString("%2Bmoney%24")
```

Result: 
```powerquery
"+money$"
```




## Category
Uri
