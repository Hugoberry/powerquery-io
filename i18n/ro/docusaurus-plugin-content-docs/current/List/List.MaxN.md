---
title: List.MaxN
---

# List.MaxN


## Description

Returnează valorile maxime din listă. Numărul de valori de returnat sau condiția de filtrare trebuie să fie specificate.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Returnează valoarea sau valorile maxime din listă, <code>list</code>.    După sortarea rândurilor, se pot specifica parametrii opționali pentru a filtra ulterior rezultatul. Parametrul opțional, <code>countOrCondition</code>, specifică numărul de valori de returnat sau o condiție de filtrare. Parametrul opțional, <code>comparisonCriteria</code>, specifică modul de comparare a valorilor din listă. <ul>        <li> <code>list</code>: lista de valori.</li>        <li> <code>countOrCondition</code>: dacă se specifică un număr, este returnată o listă de maximum <code>countOrCondition</code> elemente în ordine crescătoare. Dacă se specifică o condiție, este returnată o listă de elemente care, inițial, îndeplinesc condiția. Odată ce un element nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare.</li><li><code>comparisonCriteria</code>: <i>[opțional]</i> o valoare <code>comparisonCriteria</code> opțională poate fi specificată pentru a determina modul de comparare a elementelor din listă. Dacă acest parametru este nul, atunci se utilizează funcția de comparare implicită. </li></ul>



## Category
List.Ordering
