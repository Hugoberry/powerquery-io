---
title: Number.From
---

# Number.From


Creează un număr din valoarea dată.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnează o valoare `number` din `value` dat. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”). Dacă `value` dat este `null`, `Number.From` returnează `null`. Dacă `value` dat este `number`, se returnează `value`. Valorile următoarelor tipuri pot fi convertite la o valoare `number`:

-   `text`: o valoare `number` din reprezentarea textuală. Sunt tratate formate text obișnuite („15”, „3,423.10”, „5.0E-10”). Pentru detalii, consultați `Number.FromText`.
-   `logical`: 1 pentru `true`, 0 pentru `false`.
-   `datetime`: un număr în virgulă mobilă cu dublă precizie, ce conține un echivalent dată OLE Automation.
-   `datetimezone`: un număr în virgulă mobilă cu dublă precizie, ce conține un echivalent al datei OLE Automation al datei și orei locale de `value`.
-   `date`: un număr în virgulă mobilă cu dublă precizie, ce conține un echivalent dată OLE Automation.
-   `time`: exprimată în zile fracționare.
-   `duration`: exprimată în zile întregi și fracționare.

Dacă `value` este de orice alt tip, se returnează o eroare.


## Examples

### Example #1
Obţineţi valoarea `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obţineţi valoarea `number` a `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obțineți valoarea `number` a `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
