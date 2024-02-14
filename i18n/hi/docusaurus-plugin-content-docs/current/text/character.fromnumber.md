---
title: Character.FromNumber
---

# Character.FromNumber


किसी संख्या को टेक्स्ट वर्ण में कनवर्ट करता है.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

संख्या के समतुल्य वर्ण को लौटाता है.<br />    <br />    दिया गया <code>number</code>, 21-बिट यूनिकोड कोड पॉइंट होना चाहिए.


## Examples

### Example #1 
किसी संख्या को उसके समतुल्य वर्ण मान में रूपांतरित करें.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
किसी वर्ण को किसी संख्या में कनवर्ट करें और फिर से वापस जाएँ.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
&#34;मुस्कुराता चेहरा&#34; इमोटिकॉन के लिए हेक्साडेसिमल कोड बिंदु को इसके समतुल्य UTF-16 सरोगेट युग्म में रूपांतरित करें.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
