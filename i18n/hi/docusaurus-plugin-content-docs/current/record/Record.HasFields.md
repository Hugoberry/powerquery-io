---
title: Record.HasFields
---

# Record.HasFields


संकेत देता है कि रिकॉर्ड में निर्दिष्ट फ़ील्ड हैं या नहीं.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

तार्किक मान (true या false) लौटाकर संकेत देता है कि रिकॉर्ड <code>record</code> में <code>fields</code> में निर्दिष्ट फ़ील्ड हैं या नहीं.    किसी सूची का उपयोग करके एकाधिक फ़ील्ड मान निर्दिष्ट किए जा सकते हैं.


## Examples

### Example #1 
जाँचें कि क्या रिकॉर्ड में फ़ील्ड &#34;CustomerID&#34; है.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
जाँचें कि क्या रिकॉर्ड में फ़ील्ड &#34;CustomerID&#34; और &#34;पता&#34; है.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
