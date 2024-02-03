---
title: Text.Middle
---

# Text.Middle


## Description

किसी निश्चित लंबाई तक की सबस्ट्रिंग लौटाता है.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

<code>count</code> वर्ण, या <code>text</code> के अंत के बाद से लौटाता है; ऑफ़सेट <code>start</code> पर.


## Examples

### Example #1 
अनुक्रमणिका 6 से आरंभ होने वाले 5 वर्ण तक विस्तृत पाठ &#34;Hello World&#34; से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
अनुक्रमणिका 6 से आरंभ होकर अंत तक पाठ &#34;Hello World&#34; से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
