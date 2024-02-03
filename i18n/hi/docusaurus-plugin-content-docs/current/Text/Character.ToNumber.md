---
title: Character.ToNumber
---

# Character.ToNumber


## Description

वर्ण को संख्या मान में रूपांतरित करता है.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

<code>character</code> के समतुल्य संख्या लौटाता है.<br />    <br />    परिणाम 21-बिट यूनिकोड कोड बिंदु होगा जो उपलब्ध कराए गए चरित्र या सरोगेट जोड़ी द्वारा दर्शाया जाएगा.  


## Examples

### Example #1 
किसी वर्ण को उसके समतुल्य संख्या मान में रूपांतरित करें.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
&#34;मुस्कुराते चेहरे&#34; वाले इमोटिकॉन के लिए UTF-16 सरोगेट युग्म को उसके समतुल्य हेक्साडेसिमल कोड पॉइंट में रूपांतरित करें.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
