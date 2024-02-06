---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

निर्दिष्ट <code>delimiter</code> के बाद <code>text</code> का भाग लौटाता है.    वैकल्पिक सांख्यिक <code>index</code> इंगित करता है कि <code>delimiter</code> की किस आवृत्ति पर विचार करना चाहिए.    वैकल्पिक सूची <code>index</code> इंगित करती है कि <code>delimiter</code> की किस आवृत्ति पर विचार किया जाना चाहिए, साथ ही साथ यह कि इनपुट के प्रारंभ या उसकी समाप्ति से इंडेक्सिंग संपन्न करना चाहिए या नहीं.


## Examples

### Example #1 
(पहले) हायफ़न के बाद &#34;111-222-333&#34; का भाग प्राप्त करें.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
दूसरे हायफ़न के बाद &#34;111-222-333&#34; का भाग प्राप्त करें.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
अंतिम से दूसरे हायफ़न के बाद &#34;111-222-333&#34; का भाग प्राप्त करें.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
