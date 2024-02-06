---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Returns the portion of <code>text</code> before the specified <code>delimiter</code>.    An optional numeric <code>index</code> indicates which occurrence of the <code>delimiter</code> should be considered.    An optional list <code>index</code> indicates which occurrence of the <code>delimiter</code> should be considered, as well as whether indexing should be done from the start or end of the input.


## Examples

### Example #1 
Get the portion of &#34;111-222-333&#34; before the (first) hyphen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Get the portion of &#34;111-222-333&#34; before the second hyphen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Get the portion of &#34;111-222-333&#34; before the second hyphen from the end.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
