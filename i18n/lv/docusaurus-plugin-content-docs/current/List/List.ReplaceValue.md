---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Sarakstā tiek meklēta norādītā vērtība, un tā tiek aizstāta.


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

Vērtību sarakstā <code>list</code> tiek meklēta vērtība <code>oldValue</code>, un katrs tās gadījums tiek aizstāts ar aizstājējvērtību <code>newValue</code>.


## Examples

### Example #1 
Aizstājiet visas saraksta \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} vērtības a ar vērtību A.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
