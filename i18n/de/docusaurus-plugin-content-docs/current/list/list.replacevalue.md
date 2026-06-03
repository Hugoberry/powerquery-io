---
title: List.ReplaceValue
---

# List.ReplaceValue


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


## Remarks

Durchsucht eine Liste mit Werten (`list`) nach dem Wert "`oldValue`" und ersetzt jedes Vorkommen durch den Ersatzwert "`newValue`".


## Examples

### Example #1
Ersetzt alle a-Werte in der Liste "\{"a", "B", "a", "a"\}" durch "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
