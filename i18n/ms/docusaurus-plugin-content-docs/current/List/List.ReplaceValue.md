---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Mencari senarai untuk nilai yang ditentukan dan menggantikannya.


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

Mencari senarai nilai, <code>list</code>, untuk nilai <code>oldValue</code> dan menggantikan setiap kejadian dengan nilai gantian <code>newValue</code>.


## Examples

### Example #1 
Gantikan semua nilai &#34;a&#34; dalam senarai \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} dengan &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
