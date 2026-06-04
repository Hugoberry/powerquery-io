---
title: Int16.From
---

# Int16.From


Creează un număr întreg pe 16 de biți din valoarea dată.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnează o valoare `number` întreagă, pe 16 biți, din `value`dată. Dacă `value` dată este `null`, `Int16.From` returnează `null`. Dacă `value` dată este un `number` în intervalul de numere întregi pe 16 biți fără parte fracționară, se returnează `value`. Dacă are o parte fracționară, numărul este rotunjit cu modul de rotunjire specificat. Modul de rotunjire implicit este `RoundingMode.ToEven`. Dacă `value` este de orice alt tip, se va efectua mai întâi conversia la un `number` utilizând `Number.FromText`. Consultați `Number.Round` pentru modurile de rotunjire disponibile. De asemenea, poate fi furnizată o `culture` opțională (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți valoarea `number` întreagă, pe 16 biți, pentru `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obțineți valoarea `number` întreagă, pe 16 biți, pentru `"4.5"`, utilizând `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
