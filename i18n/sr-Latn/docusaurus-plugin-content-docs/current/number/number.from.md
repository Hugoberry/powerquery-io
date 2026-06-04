---
title: Number.From
---

# Number.From


Kreira broj od date vrednosti.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vraća vrednost `number` od datog `value`. Opcionalno se može navesti i `culture` (na primer, „en-US“). Ako dati `value` predstavlja `null`, `Number.From` vraća `null`. Ako dati `value` predstavlja `number`, vraća se `value`. Vrednosti sledećih tipova se mogu konvertovati u vrednost `number`:

-   `text`: Vrednost `number` od tekstualne reprezentacije. Obrađuju se uobičajeni tekstualni formati ("15", "3,423.10", "5.0E-10"). Pogledajte `Number.FromText` za detalje.
-   `logical`: 1 za `true`, 0 za `false`.
-   `datetime`: Broj dvostruke preciznosti sa pokretnim zarezom koji sadrži ekvivalent datuma OLE automatizacije.
-   `datetimezone`: Broj dvostruke preciznosti sa pokretnim zarezom koji sadrži ekvivalent datuma OLE automatizacije za lokalni datum i vreme `value`.
-   `date`: Broj dvostruke preciznosti sa pokretnim zarezom koji sadrži ekvivalent datuma OLE automatizacije.
-   `time`: Izraženo u decimalnim danima.
-   `duration`: Izraženo u celim i decimalnim danima.

Ako je `value` nekog drugog tipa, vraća se greška.


## Examples

### Example #1
Dobijanje vrednosti `number` za `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dobijanje vrednosti `number` za `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Preuzmite vrednost `broj` od `„12,3%“`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
