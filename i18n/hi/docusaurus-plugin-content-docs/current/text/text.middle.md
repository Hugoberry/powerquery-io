---
title: Text.Middle
---

# Text.Middle


किसी निश्चित लंबाई तक की सबस्ट्रिंग लौटाता है.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

`count` वर्ण, या `text` के अंत के बाद से लौटाता है; ऑफ़सेट `start` पर.


## Examples

### Example #1
अनुक्रमणिका 6 से आरंभ होने वाले 5 वर्ण तक विस्तृत पाठ "Hello World" से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
अनुक्रमणिका 6 से आरंभ होकर अंत तक पाठ "Hello World" से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
अनुक्रमणिका 0 से प्रारंभ होने वाले पाठ "नमस्ते दुनिया" से 2 वर्ण विस्तारित सबस्ट्रिंग ढूंढें.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
