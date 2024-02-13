---
title: List.ReplaceValue
---

# List.ReplaceValue


Wyszukuje określoną wartość na liście i zamienia ją.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Wyszukuje na liście wartości <code>list</code> wartość <code>oldValue</code> i zamienia każde jej wystąpienie na wartość zastępczą <code>newValue</code>.


## Examples

### Example #1 
Zamień wszystkie wartości &#34;a&#34; na liście \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} na wartość &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
