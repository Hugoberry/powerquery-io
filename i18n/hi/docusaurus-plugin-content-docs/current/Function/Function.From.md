---
title: Function.From
---

# Function.From


## Description

फ़ंक्शन के शीर्ष पर विशिष्ट मापदंड हस्ताक्षर के साथ फ़ंक्शन बनाता है जो एकल सूची तर्क लेता है


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

यूनेरी फ़ंक्शन <code>function</code> लेता है और प्रकार <code>functionType</code> के साथ एक नया फ़ंक्शन बनाता है जो तर्कों से सूची की रचना करता है और उसे <code>function</code> ओ पास करता है.


## Examples

### Example #1 
List.Sum जिसके तर्क एक साथ जोड़े जाते हैं को दो तर्क फ़ंक्शन में कनवर्ट करता है
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
सूची को दो-तर्क फ़ंक्शन में लेकर फ़ंक्शन को कन्वर्ट करता है
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
