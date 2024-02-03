---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

V zozname vyhľadá stanovenú hodnotu a nahradí ju.


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

V zozname hodnôt <code>list</code> vyhľadá hodnotu <code>oldValue</code> a nahradí každý výskyt náhradnou hodnotou <code>newValue</code>.


## Examples

### Example #1 
Nahraďte všetky hodnoty &#34;a&#34; v zozname \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} hodnotou &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
