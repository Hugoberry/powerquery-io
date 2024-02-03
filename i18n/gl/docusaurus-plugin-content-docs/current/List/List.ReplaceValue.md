---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Busca o valor especificado nunha lista e o substitúe.


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

Busca o valor especificado <code>oldValue</code> na lista de valores <code>list</code> e substitúe cada ocorrencia co valor de substitución <code>newValue</code>.


## Examples

### Example #1 
Substituír todos os valores &#34;a&#34; na lista \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} con &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
