---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Шарт қабылдайтын куәліктер тізімін қайтарады.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Көрсетілген <code>identityProvider</code> пайдаланып, <code>condition</code> куәліктер тізіміне түрлендіреді, <code>condition</code> барлық авторизация контекстерінде <code>true</code> мәнін қайтарады, <code>identityProvider</code> куәліктерді жеткізуші ретінде. <code>condition</code> куәліктер тізіміне түрлендіру мүмкін болмаса, қате шығарылады, мысалы, шешім қабылдау үшін, <code>condition</code> пайдаланушы немесе топ куәліктерінен басқа атрибуттарға жүгінсе.<br />     Куәліктер тізімі <code>condition</code> ішінде көрінетін куәліктерді көрсетеді және олар үшін нормалау (топты кеңейту сияқты) орындалмайды.<br />



## Category
Accessing data
