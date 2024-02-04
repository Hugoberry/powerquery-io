---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Pesquisa um valor especificado numa lista e substitui-o.


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

Pesquisa o valor <code>oldValue</code> numa lista de valores, <code>list</code>, e substitui cada ocorrência pelo valor de substituição <code>newValue</code>.


## Examples

### Example #1 
Substituir todos os valores &#34;a&#34; existentes na lista \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} por &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
