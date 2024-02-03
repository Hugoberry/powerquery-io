---
title: Record.FromList
---

# Record.FromList


## Description

ऐसा रिकॉर्ड लौटाता है, जिसमें फ़ील्ड मानों की एक सूची और फ़ील्ड का एक सेट दिया होता है.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

ऐसा रिकॉर्ड लौटाता है, जिसमें फ़ील्ड मानों की एक <code>list</code> और फ़ील्ड का एक सेट दिया होता है.  <code>fields</code> को पाठ मानों की किसी सूची या किसी रिकॉर्ड प्रकार द्वारा निर्दिष्ट किया जा सकता है.  अगर फ़ील्ड अद्वितीय नहीं हैं, तो एक त्रुटि दिखाई जाती है.


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
