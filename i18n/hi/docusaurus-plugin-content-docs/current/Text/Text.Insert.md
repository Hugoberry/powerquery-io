---
title: Text.Insert
---

# Text.Insert


## Description

दी गई स्थिति पर एक पाठ मान को अन्य में सम्मिलित करें.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

स्थिति <code>offset</code> पर पाठ मान <code>text</code> में सम्मिलित किए जाने वाले पाठ मान <code>newText</code> के परिणाम को लौटाता है. स्थिति, संख्या 0 पर प्रारंभ होती हैं.


## Examples

### Example #1 
&#34;ABD&#34; में &#34;B&#34; और &#34;D&#34; के बीच &#34;C&#34; सम्मिलित करें.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
