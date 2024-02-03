---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Na seznamu poišče navedeno vrednost in jo zamenja.


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

Na seznamu vrednosti, <code>list</code>, poišče vrednost <code>oldValue</code> in zamenja vsako pojavitev z nadomestno vrednostjo <code>newValue</code>.


## Examples

### Example #1 
Zamenjajte vse vrednosti &#34;a&#34; na seznamu \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} z &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
