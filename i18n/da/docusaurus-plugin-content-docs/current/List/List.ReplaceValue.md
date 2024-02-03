---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Søger på en liste efter den angivne værdi og erstatter den.


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

Søger på en liste med værdier, <code>list</code>, efter værdien <code>oldValue</code> og erstatter hver forekomst med erstatningsværdien <code>newValue</code>.


## Examples

### Example #1 
Erstat alle &#34;a&#34;-værdier på listen \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} med &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
