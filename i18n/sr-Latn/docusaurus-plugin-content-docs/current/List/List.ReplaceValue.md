---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Traži navedenu vrednost na listi i zamenjuje je.


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

Traži vrednost <code>oldValue</code> na listi vrednosti <code>list</code> i zamenjuje svako pojavljivanje vrednošću za zamenu <code>newValue</code>.


## Examples

### Example #1 
Zamena svih vrednosti „a“ sa liste \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} sa „A“.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
