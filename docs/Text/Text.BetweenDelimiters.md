---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Returns the portion of <code>text</code> between the specified <code>startDelimiter</code> and <code>endDelimiter</code>.    An optional numeric <code>startIndex</code> indicates which occurrence of the <code>startDelimiter</code> should be considered.    An optional list <code>startIndex</code> indicates which occurrence of the <code>startDelimiter</code> should be considered, as well as whether indexing should be done from the start or end of the input.    The <code>endIndex</code> is similar, except that indexing is done relative to the <code>startIndex</code>.


## Examples

### Example #1 
Get the portion of &#34;111 (222) 333 (444)&#34; between the (first) open parenthesis and the (first) closed parenthesis that follows it.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Get the portion of &#34;111 (222) 333 (444)&#34; between the second open parenthesis and the first closed parenthesis that follows it.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Get the portion of &#34;111 (222) 333 (444)&#34; between the second open parenthesis from the end and the second closed parenthesis that follows it.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
