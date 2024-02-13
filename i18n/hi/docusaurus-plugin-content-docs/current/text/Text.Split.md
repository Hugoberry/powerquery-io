---
title: Text.Split
---

# Text.Split


पाठ को निर्दिष्ट डीलिमिटर के आधार पर पाठ मानों की सूची में विभाजित करता है.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

निर्दिष्ट डिलिमिटर <code>separator</code> के आधार पर पाठ मान <code>text</code> के विभाजित होने के परिणामस्वरूप प्राप्त होने वाले पाठ मानों की सूची लौटाता है.


## Examples

### Example #1 
&#34;|&#34; डिलिमिटेड पाठ मान &#34;Name|Address|PhoneNumber&#34; से सूची बनाएँ.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
