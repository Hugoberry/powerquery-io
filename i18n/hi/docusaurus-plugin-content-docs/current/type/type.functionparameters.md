---
title: Type.FunctionParameters
---

# Type.FunctionParameters


फ़ंक्‍शन प्रकार के पैरामीटर के नाम पर सेट किए गए फ़ील्‍ड मानों, और उनसे संबंधित प्रकारों पर सेट किए गए उनके मानों के साथ रिकॉर्ड लौटाता है.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

<code>type</code> के पैरामीटर के नाम पर सेट किए गए फ़ील्‍ड मानों, और उनसे संबंधित प्रकारों पर सेट किए गए उनके मानों के साथ रिकॉर्ड लौटाता है.


## Examples

### Example #1 
फ़ंक्‍शन &lt;code&gt;(x as number, y as text)&lt;/code&gt; के लिए पैरामीटर के प्रकार ढूँढें.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
