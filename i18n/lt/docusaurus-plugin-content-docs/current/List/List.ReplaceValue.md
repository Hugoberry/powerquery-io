---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Ieškomas nurodytos reikšmės sąrašas ir jis pakeičiamas.


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

Ieškomas sąrašas reikšmių, <code>list</code>, reikšmei <code>oldValue</code> ir kiekvienas atvejis pakeičiamas pakeitimo reikšme <code>newValue</code>.


## Examples

### Example #1 
Pakeiskite visas sąrašo \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} reikšmes „a“ į „A“.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
