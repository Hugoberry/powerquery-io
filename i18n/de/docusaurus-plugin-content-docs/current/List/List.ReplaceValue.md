---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Durchsucht eine Liste nach dem angegebenen Wert und ersetzt ihn.


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

Durchsucht eine Liste mit Werten (<code>list</code>) nach dem Wert "<code>oldValue</code>" und ersetzt jedes Vorkommen durch den Ersatzwert "<code>newValue</code>".


## Examples

### Example #1 
Ersetzt alle a-Werte in der Liste &#34;\{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;}&#34; durch &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
