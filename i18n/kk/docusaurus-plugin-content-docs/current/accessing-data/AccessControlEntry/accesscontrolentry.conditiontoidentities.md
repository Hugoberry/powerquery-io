---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Шарт қабылдайтын куәліктер тізімін қайтарады.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Көрсетілген `identityProvider` пайдаланып, `condition` куәліктер тізіміне түрлендіреді, `condition` барлық авторизация контекстерінде `true` мәнін қайтарады, `identityProvider` куәліктерді жеткізуші ретінде. `condition` куәліктер тізіміне түрлендіру мүмкін болмаса, қате шығарылады, мысалы, шешім қабылдау үшін, `condition` пайдаланушы немесе топ куәліктерінен басқа атрибуттарға жүгінсе.

Куәліктер тізімі `condition` ішінде көрінетін куәліктерді көрсетеді және олар үшін нормалау (топты кеңейту сияқты) орындалмайды.



## Category
Accessing data
