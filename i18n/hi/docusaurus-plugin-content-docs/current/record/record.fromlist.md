---
title: Record.FromList
---

# Record.FromList


ऐसा रिकॉर्ड लौटाता है, जिसमें फ़ील्ड मानों की एक सूची और फ़ील्ड का एक सेट दिया होता है.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

फ़ील्ड मान के `list` और फ़ील्ड के सेट के आधार पर एक रिकॉर्ड लौटाता है. `fields` को या तो टेक्स्ट मान की सूची से, या रिकॉर्ड प्रकार से निर्दिष्ट किया जा सकता है. अगर फ़ील्ड अद्वितीय नहीं हैं तो एक त्रुटि आएगी.


## Examples

### Example #1
फ़ील्ड मानों की सूची और फ़ील्ड नामों की सूची से एक रिकॉर्ड बनाएँ.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
फ़ील्ड मानों और रिकॉर्ड प्रकार की सूची से एक रिकॉर्ड बनाएँ.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
