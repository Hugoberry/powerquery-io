---
title: List.ReplaceValue
---

# List.ReplaceValue


Procura o valor especificado em uma lista e a substitui.


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

Procura o valor <code>oldValue</code> em uma lista de valores, <code>list</code>, e substitui cada ocorrência pelo valor de substituição <code>newValue</code>.


## Examples

### Example #1 
Substitua todos os valores &#34;a&#34; na lista \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} por &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
