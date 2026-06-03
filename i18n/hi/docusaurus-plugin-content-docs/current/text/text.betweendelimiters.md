---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

निर्दिष्ट `startDelimiter` और `endDelimiter` के बीच `text` का भाग लौटाता है. एक वैकल्पिक संख्यिक `startIndex` इंगित करता है कि `startDelimiter` की किस आवृत्ति पर विचार करना चाहिए. एक वैकल्पिक सूची `startIndex` इंगित करती है कि `startDelimiter` की किस आवृत्ति पर विचार किया जाना चाहिए, साथ ही साथ यह कि इनपुट के प्रारंभ या उसकी समाप्ति से अनुक्रमणिका संपन्न करना चाहिए या नहीं. `endIndex` समान है, `startIndex` के संबंध में अनुक्रमणिका संपन्न करने के सिवाय.


## Examples

### Example #1
(पहले) खुले लघुकोष्ठक तथा (पहले) बंद लघुकोष्ठक जो उसके बाद है, के बीच "111 (222) 333 (444)" का भाग प्राप्त करें.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
दूसरे खुले लघुकोष्ठक तथा पहले बंद लघुकोष्ठक जो उसके बाद है, के बीच "111 (222) 333 (444)" का भाग प्राप्त करें.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
अंतिम से दूसरे खुले लघुकोष्ठक तथा दूसरे बंद लघुकोष्ठक जो उसके बाद है, के बीच "111 (222) 333 (444)" का भाग प्राप्त करें.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
