---
title: List.FindText
---

# List.FindText


Көрсетілген мәнді қамтитын мәндер тізімін (жазба өрістерін қоса) қайтарады.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

`text` мәнін қамтитын `list` тізіміндегі мәндердің тізімін қайтарады.


## Examples

### Example #1
\{"a", "b", "ab"\} тізімінде "a" сәйкес мәтіндік мәндерді анықтау.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
