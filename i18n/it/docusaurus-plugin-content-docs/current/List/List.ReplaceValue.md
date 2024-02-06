---
title: List.ReplaceValue
---

# List.ReplaceValue


Ricerca in un elenco il valore specificato e lo sostituisce.


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

Ricerca nell'elenco di valori <code>list</code> il valore <code>oldValue</code> e sostituisce ogni occorrenza con il valore di sostituzione <code>newValue</code>.


## Examples

### Example #1 
Sostituire tutti i valori &#34;a&#34; nell&#39;elenco \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} con &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
