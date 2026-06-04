---
title: Text.ToList
---

# Text.ToList


Көрсетілген мәтіндік мәннен таңбалық мәндердің тізімін қайтарады.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Көрсетілген `text` мәтіндік мәнінен таңбалық мәндердің тізімін қайтарады.


## Examples

### Example #1
"Сәлем Әлем" мәтінінен таңбалық мәндердің тізімін жасау.
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
