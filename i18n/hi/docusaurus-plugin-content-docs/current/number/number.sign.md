---
title: Number.Sign
---

# Number.Sign


संख्या के धनात्मक होने पर 1, ऋणात्मक होने पर -1 और शून्य होने पर 0 लौटाता है.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

<code>number</code> के धनात्मक संख्या होने पर 1, ऋणात्मक संख्या होने पर -1 और शून्य होने पर 0 लौटाता है.    यदि <code>number</code> नल है, तो <code>Number.Sign</code> नल लौटाता है.


## Examples

### Example #1 
182 का चिह्न निर्धारित करें.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
-182 का चिह्न निर्धारित करें.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
0 का चिह्न निर्धारित करें.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
