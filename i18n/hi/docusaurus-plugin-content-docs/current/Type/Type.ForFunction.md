---
title: Type.ForFunction
---

# Type.ForFunction


## Description

उस प्रकार को लौटाता है जो विशिष्ट पैरामीटर और वापसी प्रकार प्रतिबंध वाले फ़ंक्शन का प्रतिनिधित्व करता है.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

<code>signature</code> से <code>फ़ंक्‍शन प्रकार</code>, <code>ReturnType</code> और <code>पैरामीटर</code> का रिकॉर्ड, और <code>min</code>, फ़ंक्‍शन को इनवोक करने के लिए आवश्‍यक तर्कों की न्‍यूनतम संख्‍या बनाता है.


## Examples

### Example #1 
किसी फ़ंक्शन के लिए ऐसे प्रकार बनाता है जो X नाम वाला पैरामीटर लेता है और कोई संख्या लौटाता है।
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
