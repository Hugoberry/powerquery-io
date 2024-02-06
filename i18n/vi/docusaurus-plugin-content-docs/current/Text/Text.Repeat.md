---
title: Text.Repeat
---

# Text.Repeat


Trả về một giá trị văn bản bao gồm văn bản đầu vào được lặp lại ở số lần được chỉ định.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Trả về một giá trị văn bản bao gồm văn bản đầu vào <code>text</code> được lặp lại <code>count</code> lần.


## Examples

### Example #1 
Lặp lại văn bản &#34;a&#34; 5 lần.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Lặp lại văn bản &#34;helloworld&#34; 3 lần.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
