---
title: Text.Split
---

# Text.Split


## Description

Көрсетілген бөлгіштің негізінде мәтінді мәтіндік мәндер тізіміне бөледі.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

<code>separator</code> көрсетілген бөлгішінің негізінде <code>text</code> мәтіндік мәнін бөлу нәтижесінде алынған мәтіндік мәндердің тізімін қайтарады.


## Examples

### Example #1 
&#34;|&#34; таңбасымен бөлінген &#34;Name|Address|PhoneNumber&#34; мәтіндік мәнінен тізімді жасау.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
