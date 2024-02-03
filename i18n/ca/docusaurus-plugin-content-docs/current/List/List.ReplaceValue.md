---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Cerca en una llista el valor especificat i el substitueix.


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

Cerca en una llista de valors, <code>list</code>, el valor <code>oldValue</code> i substitueix cada aparició pel valor de substitució <code>newValue</code>.


## Examples

### Example #1 
Substitueix tots els valors &#34;a&#34; de la llista \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} per &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
