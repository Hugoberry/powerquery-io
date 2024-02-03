---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Тізімде көрсетілген мәнді іздейді және оны ауыстырады.


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

<code>list</code> мәндер тізімінде <code>oldValue</code> мәнін іздейді және әр дананы <code>newValue</code> ауыстыру мәнімен ауыстырады.


## Examples

### Example #1 
\{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} тізіміндегі барлық &#34;a&#34; мәндерін &#34;A&#34; мәнімен ауыстыру.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
