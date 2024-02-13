---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


किसी रिकॉर्ड को URI क्वेरी स्ट्रिंग पर असेंबल करें.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

वर्णों को आवश्यकतानुसार ऐस्केप करते हुए, रिकॉर्ड <code>query</code> को URI क्वेरी स्ट्रिंग पर असेंबल करें.


## Examples

### Example #1 
उस क्वेरी स्ट्रिंग को एन्कोड करें जिसमें कुछ विशेष वर्ण हैं.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
