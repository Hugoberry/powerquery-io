---
title: Function.From
---

# Function.From


फ़ंक्शन के शीर्ष पर विशिष्ट पैरामीटर हस्ताक्षर के साथ फ़ंक्शन बनाता है जो एकल सूची तर्क लेता है.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

यूनेरी फ़ंक्शन `function` लेता है और प्रकार `functionType` के साथ एक नया फ़ंक्शन बनाता है जो तर्कों से सूची की रचना करता है और उसे `function` ओ पास करता है.


## Examples

### Example #1
List.Sum को दो-तर्क फ़ंक्शन में रूपांतरित करता है जिसके तर्क एक साथ जोड़े जाते हैं.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
सूची को दो-तर्क फ़ंक्शन में ले जाने वाले फ़ंक्शन को रूपांतरित करता है.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
