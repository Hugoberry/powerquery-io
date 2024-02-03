---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

निर्दिष्ट <code>delimiter</code> से पहले <code>text</code> का भाग लौटाता है.    एक वैकल्पिक संख्यिक <code>index</code> इंगित करता है कि <code>delimiter</code> की किस आवृत्ति पर विचार करना चाहिए.    एक वैकल्पिक सूची <code>index</code> इंगित करती है कि <code>delimiter</code> की किस आवृत्ति पर विचार किया जाना चाहिए, साथ ही साथ यह कि इनपुट के प्रारंभ या उसकी समाप्ति से अनुक्रमणिका संपन्न करना चाहिए या नहीं.


## Examples

### Example #1 
(पहले) हायफ़न से पहले &#34;111-222-333&#34; का भाग प्राप्त करें.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
दूसरे हायफ़न से पहले &#34;111-222-333&#34; का भाग प्राप्त करें.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
अंतिम से दूसरे हायफ़न से पहले &#34;111-222-333&#34; का भाग प्राप्त करें.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
