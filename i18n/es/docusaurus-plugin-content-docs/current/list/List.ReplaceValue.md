---
title: List.ReplaceValue
---

# List.ReplaceValue


Busca en una lista el valor especificado y lo sustituye.


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

Busca en una lista de valores <code>list</code> el valor <code>oldValue</code> y sustituye cada coincidencia con el valor de reemplazo <code>newValue</code>.


## Examples

### Example #1 
Reemplaza todos los valores &#34;a&#34; de la lista \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} con &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
