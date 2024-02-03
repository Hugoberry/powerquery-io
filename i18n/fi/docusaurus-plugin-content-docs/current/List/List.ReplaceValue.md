---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Hakee luettelosta määritettyä arvoa ja korvaa sen.


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

Hakee arvoluettelosta <code>list</code> arvoa <code>oldValue</code> ja korvaa kunkin esiintymän korvaavalla arvolla <code>newValue</code>.


## Examples

### Example #1 
Korvaa kaikki &#34;a&#34;-arvot luettelossa \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} &#34;A&#34;-arvolla.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
