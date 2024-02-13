---
title: Guid.From
---

# Guid.From


दिए गए मान से guid मान लौटाता है.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

दिए गए <code>value</code> से <code>Guid.Type</code> वापस करता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Guid.From</code> <code>नल</code> वापस करता है.  यह देखने के लिए जाँच की जाएगी कि दिया गया <code>value</code> स्वीकार करने योग्य फ़ॉर्मेट में है या नहीं. स्वीकार करने योग्य फ़ॉर्मेट उदाहरणों में प्रदान किए गए हैं.


## Examples

### Example #1 
Guid 32 निरंतर हेक्साडेसिमल अंकों के रूप में प्रदान की जा सकती है.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid 32 हेक्साडेसिमल अंक के रूप में प्रदान की जा सकती है, जिसे 8-4-4-4-12 के खंडों में हायफ़न द्वारा पृथक किया जाता है.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid 32 हेक्साडेसिमल अंक के रूप में प्रदान की जा सकती है, जिसे हायफ़न द्वारा पृथक किया जाता है और धनुकोष्ठक में संलग्न होती है.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid 32 हेक्साडेसिमल अंक हाइफ़न से अलग कर दिया और कोष्ठक से घिरा के रूप में प्रदान की जा सकती.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
