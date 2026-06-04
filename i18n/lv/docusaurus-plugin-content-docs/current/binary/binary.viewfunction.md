---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Izveido funkciju, kuru var pārtvert skatā definētais apdarinātājs (izmantojot Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Pamatojoties uz `function`, tiek izveidota skata funkcija, kuru var apstrādāt funkcijas `Binary.View` izveidotajā skatā.

Skata funkcijai var definēt apdarinātāju, izmantojot funkcijas `Binary.View` apdarinātāju `OnInvoke`.

Tāpat kā iebūvēto darbību apdarinātājiem, ja apdarinātājs `OnInvoke` netiek norādīts vai tas neapstrādā skata funkciju, vai rada kļūdu, `function` tiek lietota virs skata.

Pilnīgāku `Binary.View` un pielāgoto skata funkciju aprakstu skatiet publicētajā Power Query pielāgotā savienotāja dokumentācijā.



## Category
Binary
