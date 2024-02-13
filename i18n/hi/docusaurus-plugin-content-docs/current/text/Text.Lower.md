---
title: Text.Lower
---

# Text.Lower


सभी वर्णों को लोअरकेस में रूपांतरित करता है.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

<code>text</code> के सभी वर्णों को लोअरकेस में रूपांतरित करने वाला परिणाम लौटाता है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
&#34;AbCd&#34; का लोअरकेस संस्करण प्राप्त करें.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
