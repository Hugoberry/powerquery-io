---
title: Table.ViewFunction
---

# Table.ViewFunction


Tiek izveidota funkcija, kuru var pārtvert skatā definēts apdarinātājs (izmantojot Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Pamatojoties uz `function`, tiek izveidota skata funkcija, kuru var apstrādāt funkcijas `Table.View` izveidotā skatā.

Skata funkcijai var definēt apdarinātāju, izmantojot funkcijas `Table.View` apdarinātāju `OnInvoke`.

Tāpat kā iebūvēto darbību apdarinātājiem, ja apdarinātājs `OnInvoke` netiek norādīts, neapstrādā skata funkciju vai rada kļūdu, `function` tiek lietota virs skata.

Papildinformāciju par `Table.View` un pielāgotām skata funkcijām skatiet publicētajā Power Query pielāgotā savienotāja dokumentācijā.



## Category
Table.Table construction
