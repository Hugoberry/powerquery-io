---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Megkeresi a megadott értéket egy listán, és lecseréli.


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

Megkeresi az értékek <code>list</code> listáján a(z) <code>oldValue</code> értéket, és mindegyik előfordulását lecseréli a(z) <code>newValue</code> csereértékre.


## Examples

### Example #1 
Az összes „a” érték lecserélése az \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} listán az „A” értékre
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
