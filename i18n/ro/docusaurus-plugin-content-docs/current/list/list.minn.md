---
title: List.MinN
---

# List.MinN


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


## Remarks

Returnează valoarea sau valorile minime din listă, `list`. Parametrul, `countOrCondition`, specifică numărul de valori de returnat sau o condiție de filtrare. Parametrul opțional, `comparisonCriteria`, specifică modul de comparare a valorilor din listă.

-   `list`: lista de valori.
-   `countOrCondition`: dacă se specifică un număr, este returnată o listă de maximum `countOrCondition` elemente în ordine crescătoare. Dacă se specifică o condiție, este returnată o listă de elemente care, inițial, îndeplinesc condiția. Odată ce un element nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare. Dacă acest parametru este nul, se returnează cea mai mică valoare unică din listă.
-   `comparisonCriteria`: *(opțional)* O valoare `comparisonCriteria` opțională poate fi specificată pentru a determina modul de comparare a elementelor din listă. Dacă acest parametru este nul, atunci se utilizează funcția de comparare implicită.


## Examples

### Example #1
Aflaţi cele mai mici 5 valori din lista `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
