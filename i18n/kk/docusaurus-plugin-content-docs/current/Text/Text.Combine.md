---
title: Text.Combine
---

# Text.Combine


## Description

Мәтіндік мәндер тізімін бір мәтіндік мәнге біріктіреді.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Мәтін мәндерінің тізімін (<code>texts</code>) бір мәтіндік мәнге біріктіру нәтижесін қайтарады. <code>texts</code> ішінде бар барлық <code>NULL</code> мәндері еленбейді.    Нәтижеде біріктірілген мәтінде пайдаланылатын қосымша <code>separator</code> көрсетуге болады.


## Examples

### Example #1 
&#34;Seattle&#34; және &#34;WA&#34; мәтіндік мәндерін біріктіру.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Үтірмен және бос орынмен бөлінген &#34;Seattle&#34; және &#34;WA&#34; мәтіндік мәндерін біріктіру.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Үтір және бос орынмен бөлінген &#34;Seattle&#34;, &lt;code&gt;NULL&lt;/code&gt; және &#34;WA&#34; мәндерін біріктіріңіз. (&lt;code&gt;NULL&lt;/code&gt; еленбейтінін ескеріңіз.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
