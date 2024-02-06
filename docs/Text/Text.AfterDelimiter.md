---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Returns the portion of <code>text</code> after the specified <code>delimiter</code>.    An optional numeric <code>index</code> indicates which occurrence of the <code>delimiter</code> should be considered.    An optional list <code>index</code> indicates which occurrence of the <code>delimiter</code> should be considered, as well as whether indexing should be done from the start or end of the input.


## Examples

### Example #1 
Get the portion of &#34;111-222-333&#34; after the (first) hyphen.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Get the portion of &#34;111-222-333&#34; after the second hyphen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Get the portion of &#34;111-222-333&#34; after the second hyphen from the end.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
