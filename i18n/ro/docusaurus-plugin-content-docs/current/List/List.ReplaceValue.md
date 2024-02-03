---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Caută o listă pentru valoarea specificată şi o înlocuieşte.


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

Caută o listă de valori, <code>list</code>, pentru valoarea <code>oldValue</code> şi înlocuieşte fiecare ocurenţă cu valoarea de înlocuire <code>newValue</code>.


## Examples

### Example #1 
Înlocuiţi toate valorile „a” din lista \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} cu „A”.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
