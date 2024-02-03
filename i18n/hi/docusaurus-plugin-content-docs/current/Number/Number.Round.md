---
title: Number.Round
---

# Number.Round


## Description

पूर्णांक संख्या लौटाता है. अंकों की संख्या और पूर्णन मोड निर्दिष्ट किए जा सकते हैं.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

निकटतम संख्या में पूर्णांक <code>number</code> का परिणाम लौटाता है. यदि <code>number</code> नल है, तो <code>Number.Round</code> नल लौटाता है.<br />      <br />      डिफ़ॉल्ट के रूप में, <code>number</code> को निकटतम पूर्णांक में बदला जाता है और युग्म को निकटतम सम संख्या में पूर्णांकन करके तोड़ दिया गया है (<code>RoundingMode.ToEven</code> का उपयोग करके, जिसे "बैंकर्स राउडिंग” के नाम से भी जाना जाता है).<br />      <br />      हालाँकि, इन डिफ़ॉल्ट को निम्न वैकल्पिक पैरामीटर के माध्यम से ओवरराइड किया जा सकता है.      <ul>        <li><code>digits</code>: इससे <code>number</code> को दशमलव अंकों की विशिष्ट संख्या तक पूर्णांकन करना होगा.</li>        <li><code>roundingMode</code>:जब <code>number</code> दो संभावित पूर्णांक मानों के बीच मध्यबिंदु पर होता है, तो युग्म-तोड़ने के डिफ़ॉल्ट व्यवहार को ओवरराइड करता है      (संभावित मानों के लिए <code>RoundingMode.Type</code> देखें).</li>      </ul>


## Examples

### Example #1 
1.234 को निकटतम छोटे पूर्णांक तक पूर्णांक बनाता है.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1.56 को निकटतम छोटे पूर्णांक तक पूर्णांक बनाता है.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
1.2345 को दो दशमलव स्थान तक पूर्णांक बनाएँ.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
1.2345 को तीन दशमलव स्थान तक पूर्णांक बनाएँ (बढ़ाकर पूर्णांक बनाकर).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
1.2345 को तीन दशमलव स्थान तक पूर्णांक बनाएँ (घटाकर पूर्णांक बनाकर).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
