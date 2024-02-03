---
title: Text.Upper
---

# Text.Upper


## Description

सभी वर्णों को अपरकेस में कनवर्ट करता है.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code> के सभी वर्णों को अपरकेस में रूपांतरित करने वाला परिणाम लौटाता है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
&#34;aBcD&#34; का अपरकेस संस्करण प्राप्त करें.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
