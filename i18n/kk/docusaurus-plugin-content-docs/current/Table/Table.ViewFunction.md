---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Көріністе анықталған өңдегіш арқылы ұстауға болатын функция жасайды (Table.View арқылы).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

<code>function</code> дегенде <code>Table.View</code> арқылы жасалған көріністе өңдеуге болатын көрініс функциясын жасайды.<br /><code>Table.View</code> көрінісінің <code>OnInvoke</code> өңдегішін көрініс функциясы үшін өңдегішті анықтау үшін пайдалануға болады.<br />Кірістірілген операцияларға арналған өңдегіштер сияқты, <code>OnInvoke</code> өңдегіші көрсетілмеген болса немесе ол көрініс функциясын өңдемесе я болмаса өңдегіш қатеге әкелсе, <code>function</code> көрініске қоса қолданылады.<br /><code>Table.View</code> көрінісінің және теңшелетін көрініс функциясының толығырақ сипаттамасын жарияланған Power Query теңшелетін қосқыш құжаттамасынан қараңыз.<br />



## Category
Table.Table construction
