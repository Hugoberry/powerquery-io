---
title: List.MinN
---

# List.MinN


## Description

Returnează valorile minime din listă. Numărul de valori de returnat sau condiția de filtrare poate fi specificată.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Returnează valoarea sau valorile minime din listă, <code>list</code>.    Parametrul, <code>countOrCondition</code>, specifică numărul de valori de returnat sau o condiție de filtrare. Parametrul opțional, <code>comparisonCriteria</code>, specifică modul de comparare a valorilor din listă. <ul>        <li> <code>list</code>: lista de valori.</li>        <li> <code>countOrCondition</code>: dacă se specifică un număr, este returnată o listă de maximum <code>countOrCondition</code> elemente în ordine crescătoare. Dacă se specifică o condiție, este returnată o listă de elemente care, inițial, îndeplinesc condiția. Odată ce un element nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare. Dacă acest parametru este nul, se returnează cea mai mică valoare unică din listă.</li><li><code>comparisonCriteria</code>: <i>[opțional]</i> o valoare <code>comparisonCriteria</code> opțională poate fi specificată pentru a determina modul de comparare a elementelor din listă. Dacă acest parametru este nul, atunci se utilizează funcția de comparare implicită. </li></ul>


## Examples

### Example #1 
Aflaţi cele mai mici 5 valori din lista &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
