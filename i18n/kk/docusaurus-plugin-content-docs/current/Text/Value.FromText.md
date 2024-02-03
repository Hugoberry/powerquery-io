---
title: Value.FromText
---

# Value.FromText


## Description

Мәтіндік көріністер түрі қатаң көрсетілген мәнді жасайды.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

<code>text</code> мәтіндік көрінісінен мәнді кодсыздандырады және оны тиісті түрі бар мән ретінде түсіндіреді.    <code>Value.FromText</code> мәтіндік мәнді қабылдайды, содан кейін санды, логикалық мәнді, null мәнін, күн және уақыт мәнін, ұзақтық мәнін немесе мәтіндік мәнді қайтарады.  Бос мәтіндік мән null мәні ретінде түсіндіріледі.    Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").



## Category
Text.Conversions from and to text
