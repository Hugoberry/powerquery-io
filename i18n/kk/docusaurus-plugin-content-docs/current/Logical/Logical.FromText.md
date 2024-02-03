---
title: Logical.FromText
---

# Logical.FromText


## Description

&#34;true&#34; және &#34;false&#34; мәтіндік мәндерінен логикалық мәнді жасайды.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

<code>text</code> мәтіндік мәнінен "true" жәннемесе "false" логикалық мәнін жасайды. Егер <code>text</code> жолды қамтыса, қиыс жағдай туралы хабар қайтарылады. <code>text</code> мәтіндік мәні регистрді ескермейді.


## Examples

### Example #1 
&#34;true&#34; мәтін жолынан логикалық мәнді жасау.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
&#34;a&#34; мәтін жолынан логикалық мәнді жасау.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
