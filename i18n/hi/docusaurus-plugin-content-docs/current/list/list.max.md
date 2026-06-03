---
title: List.Max
---

# List.Max


सूची का अधिकतम मान या रिक्त सूची के लिए डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

सूची में अधिकतम आइटम लौटाता है या अगर सूची रिक्त है तो वैकल्पिक डिफ़ॉल्ट मान लौटाता है.

-   `list`: मानों की सूची.
-   `default`:(वैकल्पिक) यदि सूची रिक्त है तो लौटाया जाने वाला मान.
-   `comparisonCriteria`: (वैकल्पिक) एक फ़ंक्शन जिसका उपयोग तुलना करने से पहले मानों को रूपांतरित करने के लिए किया जाता है. अगर यह पैरामीटर `null` है, तो मानों की तुलना बिना किसी परिवर्तन के की जाती है.
-   `includeNulls`:(वैकल्पिक) यह इंगित करता है कि सूची में `null` मानों को अधिकतम आइटम निर्धारित करने में शामिल किया जाना चाहिए या नहीं. डिफ़ॉल्ट मान `true` है.


## Examples

### Example #1
निर्दिष्ट सूची में अधिकतम मान ज्ञात करें.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
निर्दिष्ट सूची में अधिकतम मान ज्ञात करें या अगर वह रिक्त है तो -1 लौटाएँ.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
टेक्स्ट मानों की सूची में वह आइट ढूँढें जो वर्णानुक्रम में अंतिम है. अगर सूची रिक्त है, तो "कोई नहीं" लौटाएँ.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
जर्मन दिनांकों की सूची से नवीनतम दिनांक प्राप्त करें. अगर सूची रिक्त है तो 1 जनवरी 2000 लौटाएँ.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
