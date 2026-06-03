---
title: Text.Insert
---

# Text.Insert


दी गई स्थिति पर एक पाठ मान को अन्य में सम्मिलित करें.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

स्थिति `offset` पर पाठ मान `text` में सम्मिलित किए जाने वाले पाठ मान `newText` के परिणाम को लौटाता है. स्थिति, संख्या 0 पर प्रारंभ होती हैं.


## Examples

### Example #1
"ABD" में "B" और "D" के बीच "C" सम्मिलित करें.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
