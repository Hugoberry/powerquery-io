---
title: Logical.ToText
---

# Logical.ToText


## Description

Логикалық мән көрсетілген болса, &#34;true&#34; немесе &#34;false&#34; мәтінін қайтарады.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

<code>logicalValue</code> логикалық мәнінен <code>true</code> немесе <code>false</code> мәтіндік мәнін жасайды. Егер <code>logicalValue</code> логикалық мән болмаса, қиыс жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
&lt;code&gt;true&lt;/code&gt; логикалық мәнінен мәтіндік мәнді жасау.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
