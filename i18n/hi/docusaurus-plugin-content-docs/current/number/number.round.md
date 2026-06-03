---
title: Number.Round
---

# Number.Round


पूर्णांक संख्या लौटाता है. अंकों की संख्या और पूर्णन मोड निर्दिष्ट किए जा सकते हैं.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

निकटतम संख्या में पूर्णांक `number` का परिणाम लौटाता है. यदि `number` नल है, तो `Number.Round` नल लौटाता है.  
  
डिफ़ॉल्ट के रूप में, `number` को निकटतम पूर्णांक में बदला जाता है और युग्म को निकटतम सम संख्या में पूर्णांकन करके तोड़ दिया गया है (`RoundingMode.ToEven` का उपयोग करके, जिसे "बैंकर्स राउडिंग” के नाम से भी जाना जाता है).  
  
हालाँकि, इन डिफ़ॉल्ट को निम्न वैकल्पिक पैरामीटर के माध्यम से ओवरराइड किया जा सकता है.

-   `digits`: इससे `number` को दशमलव अंकों की विशिष्ट संख्या तक पूर्णांकन करना होगा.
-   `roundingMode`:जब `number` दो संभावित पूर्णांक मानों के बीच मध्यबिंदु पर होता है, तो युग्म-तोड़ने के डिफ़ॉल्ट व्यवहार को ओवरराइड करता है (संभावित मानों के लिए `RoundingMode.Type` देखें).


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
