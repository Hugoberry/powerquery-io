---
title: List.ReplaceValue
---

# List.ReplaceValue


Ищет в списке указанное значение и заменяет его.


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

Ищет в списке значений <code>list</code> значение <code>oldValue</code> и заменяет каждое его вхождение значением <code>newValue</code>.


## Examples

### Example #1 
Заменить все значения &#34;a&#34; в списке \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} значением &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
