---
title: List.ReplaceValue
---

# List.ReplaceValue


Zoekt een lijst voor de opgegeven waarde en vervangt die waarde.


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

Zoekt een lijst met waarden, <code>list</code>, voor de waarde <code>oldValue</code> en vervangt elke instantie van die waarde door een de waarde <code>newValue</code>.


## Examples

### Example #1 
Elke &#34;a&#34; in de lijst \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} vervangen door een &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
