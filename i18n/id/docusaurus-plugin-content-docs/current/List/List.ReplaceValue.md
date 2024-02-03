---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Mencari daftar nilai yang ditetapkan dan menggantinya.


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

Mencari daftar nilai, <code>list</code>, untuk nilai <code>oldValue</code> dan mengganti setiap kemunculan dengan nilai pengganti <code>newValue</code>.


## Examples

### Example #1 
Mengganti semua nilai &#34;a&#34; dalam daftar \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} dengan &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
