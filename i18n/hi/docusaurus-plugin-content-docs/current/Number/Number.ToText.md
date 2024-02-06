---
title: Number.ToText
---

# Number.ToText


दी गई संख्या को टेक्स्ट में कन्वर्ट करता है.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

सांख्यिक मान <code>number</code> को <code>format</code> द्वारा बताए गए फ़ॉर्मेट में टेक्स्ट मान में बदलता है.<br />    <br />    फ़ॉर्मेट एक टेक्स्ट मान है जो इंगित करता है कि संख्या कैसे कन््र्ट की जानी चाहिए. समर्थित फ़ॉर्मेट मानों पर अधिक विवरण के लिए, https://go.microsoft.com/fwlink/?linkid=2241210 और https://go.microsoft.com/fwlink/?linkid=2240884 पर जाएँ.<br />    <br />    <code>format</code> के कल्चर पर निर्भर व्यवहार को नियंत्रित करने के लिए एक वैकल्पिक <code>culture</code> भी उपलब्ध कराया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
किसी स्वरूप को निर्दिष्ट किए बिना किसी संख्या को टेक्स्ट में कन्वर्ट करें.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
किसी संख्या को घातांक स्वरूप में रूपांतरित करें.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
किसी संख्या को केवल एक दशमलव स्थान के साथ प्रतिशत स्वरूप में कन्वर्ट करें.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
