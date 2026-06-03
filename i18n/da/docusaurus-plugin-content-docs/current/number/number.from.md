---
title: Number.From
---

# Number.From


Opretter et tal ud fra den angivne værdi.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen `number` ud fra den angivne `value`. Der kan også angives en valgfri `culture` (f.eks. "en-US"). Hvis den angivne `value` er `null`, vil `Number.From` returnere `null`. Hvis den angivne `value` er `number`, returneres `value`. Værdier af følgende typer kan konverteres til en værdi af typen `number`:

-   `text`: En værdi af typen `number` fra en tekstrepræsentation. Almindelige tekstformater håndteres (15", "3,423.10", "5.0E-10"). Se `Number.FromText` for at få flere oplysninger.
-   `logical`: 1 for `true`, 0 for `false`.
-   `datetime`: Et reelt tal med dobbeltpræcision, der indeholder en OLE Automation-datoækvivalens.
-   `datetimezone`: Et reelt tal med dobbeltpræcision, der indeholder en OLE Automation-datoækvivalens for den lokale dato og det lokale klokkeslæt, `value`.
-   `date`: Et reelt tal med dobbeltpræcision, der indeholder en OLE Automation-datoækvivalens.
-   `time`: Udtrykt i brøkdage.
-   `duration`: Udtrykt i hele dage og brøkdage.

Hvis `value` er af en anden type, returneres der en fejl.


## Examples

### Example #1
Hent `"4"` for værdien `number`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hent `#datetime(2020, 3, 20, 6, 0, 0)` for værdien `number`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Hent `tal`værdien af `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
