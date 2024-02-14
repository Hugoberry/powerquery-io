---
title: List.ReplaceValue
---

# List.ReplaceValue


Söker i en lista efter angivet värde och ersätter det.


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

Söker i en lista med värden, <code>list</code>, efter värdet <code>oldValue</code> och ersätter varje förekomst med ersättningsvärdet <code>newValue</code>.


## Examples

### Example #1 
Ersätt alla &#34;a&#34;-värden i listan \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} med &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
