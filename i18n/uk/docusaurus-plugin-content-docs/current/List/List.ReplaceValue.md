---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Шукає у списку вказане значення та замінює його.


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

Шукає у списку значень, <code>list</code>, значення <code>oldValue</code> і замінює кожне його входження на значення заміни <code>newValue</code>.


## Examples

### Example #1 
Замінити усі значення &#34;a&#34; у списку \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} на &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
