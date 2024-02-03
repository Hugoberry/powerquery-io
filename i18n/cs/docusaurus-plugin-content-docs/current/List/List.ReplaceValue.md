---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Vyhledá v seznamu zadanou hodnotu a nahradí ji.


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

Vyhledá v seznamu hodnot <code>list</code> hodnotu <code>oldValue</code> a nahradí každý její výskyt nahrazující hodnotou <code>newValue</code>.


## Examples

### Example #1 
Nahradí v seznamu \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} všechny hodnoty a hodnotou A.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
