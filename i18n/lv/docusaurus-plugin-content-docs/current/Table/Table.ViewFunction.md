---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Tiek izveidota funkcija, kuru var pārtvert skatā definēts apdarinātājs (izmantojot Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Pamatojoties uz <code>function</code>, tiek izveidota skata funkcija, kuru var apstrādāt funkcijas <code>Table.View</code> izveidotā skatā.<br />Skata funkcijai var definēt apdarinātāju, izmantojot funkcijas <code>Table.View</code> apdarinātāju <code>OnInvoke</code>.<br />Tāpat kā iebūvēto darbību apdarinātājiem, ja apdarinātājs <code>OnInvoke</code> netiek norādīts, neapstrādā skata funkciju vai rada kļūdu, <code>function</code> tiek lietota virs skata.<br />Papildinformāciju par <code>Table.View</code> un pielāgotām skata funkcijām skatiet publicētajā Power Query pielāgotā savienotāja dokumentācijā.<br />



## Category
Table.Table construction
