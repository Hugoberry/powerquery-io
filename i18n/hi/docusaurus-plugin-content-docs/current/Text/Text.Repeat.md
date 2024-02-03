---
title: Text.Repeat
---

# Text.Repeat


## Description

इनपुट की निर्दिष्ट बार दोहराई गई पंक्तियों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

<code>count</code> बार दोहराए गए इनपुट पाठ <code>text</code> द्वारा संयोजित पाठ मान को लौटाता है.


## Examples

### Example #1 
पाठ &#34;a&#34; को पाँच बार दोहराएँ.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
पाठ &#34;helloworld&#34; को तीन बार दोहराएँ.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
