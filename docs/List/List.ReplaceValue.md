---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Searches a list for the specified value and replaces it.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Details

Searches a list of values, <code>list</code>, for the value <code>oldValue</code> and replaces each occurrence with the replacement value <code>newValue</code>.


## Examples

### Example #1 
Replace all the &#34;a&#34; values in the list \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} with &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
