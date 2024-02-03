---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Izveido funkciju, kuru var pārtvert skatā definētais apdarinātājs (izmantojot Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Pamatojoties uz <code>function</code>, tiek izveidota skata funkcija, kuru var apstrādāt funkcijas <code>Binary.View</code> izveidotajā skatā.<br />Skata funkcijai var definēt apdarinātāju, izmantojot funkcijas <code>Binary.View</code> apdarinātāju <code>OnInvoke</code>.<br />Tāpat kā iebūvēto darbību apdarinātājiem, ja apdarinātājs <code>OnInvoke</code> netiek norādīts vai tas neapstrādā skata funkciju, vai rada kļūdu, <code>function</code> tiek lietota virs skata.<br />Pilnīgāku <code>Binary.View</code> un pielāgoto skata funkciju aprakstu skatiet publicētajā Power Query pielāgotā savienotāja dokumentācijā.<br />



## Category
Binary
