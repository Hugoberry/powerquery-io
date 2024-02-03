---
title: List.FindText
---

# List.FindText


## Description

Көрсетілген мәнді қамтитын мәндер тізімін (жазба өрістерін қоса) қайтарады.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

<code>text</code> мәнін қамтитын <code>list</code> тізіміндегі мәндердің тізімін қайтарады.


## Examples

### Example #1 
\{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} тізімінде &#34;a&#34; сәйкес мәтіндік мәндерді анықтау. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
