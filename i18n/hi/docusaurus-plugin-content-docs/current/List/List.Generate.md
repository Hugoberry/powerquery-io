---
title: List.Generate
---

# List.Generate


मानों की सूची जनरेट करता है.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

प्रदान किए गए फ़ंक्शंस का उपयोग करके मानों की एक सूची जनरेट करता है. <code>initial</code> फ़ंक्शन एक प्रारंभिक कैंडिडेट मान जनरेट करता है, जिसका फिर <code>condition</code> के विरुद्ध परीक्षण किया जाता है.    यदि कैंडिडेट मान अनुमोदित है, तो यह परिणामी सूची के भाग के रूप में लौटाया जाता है और नया अनुमोदित मान <code>next</code> पर भेजकर अगला कैंडिडेट मान जनरेट किया जाता है.    एक बार किसी कैंडिडेट मान <code>condition</code> से मिलान करने में विफल होने पर सूची जनरेशन प्रक्रिया रुक जाती है.    परिणामी सूची में आइटम्स को रूपांतरित करने के लिए एक वैकल्पिक पैरामीटर, <code>selector</code> भी प्रदान किया जा सकता है.


## Examples

### Example #1 
10 से शुरू करके एक सूची बनाएँ, फिर हर बार एक से कम करें और सुनिश्चित करें कि प्रत्येक आइटम शून्य से अधिक हो.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
x और y रिकॉर्ड्स वाली एक सूची जनरेट करें, जहाँ x एक मान हो और y एक सूची हो. x को 10 से कम रहना चाहिए और सूची y के आइटमों की संख्या को दर्शाना चाहिए. सूची जनरेट होने के बाद, केवल x मानों को लौटाएँ.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
