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

Trả về một giá trị văn bản bao gồm văn bản đầu vào `text` được lặp lại `count` lần.


## Examples

### Example #1
Lặp lại văn bản "a" 5 lần.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Lặp lại văn bản "helloworld" 3 lần.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
