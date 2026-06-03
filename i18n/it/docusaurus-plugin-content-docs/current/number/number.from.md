---
title: Number.From
---

# Number.From


Crea un numero dal valore specificato.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Restituisce un valore `numero` dall'elemento `value` specificato. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT". Se l'elemento specificato `value` è `null`, `Number.From` restituisce `null`. Se l'elemento specificato `value` è `numero`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore `numero`:

-   `text`: valore `numero` dalla rappresentazione testuale. Vengono gestiti i formati di testo comuni ("15", "3,423.10", "5.0E-10"). Per informazioni, vedere `Number.FromText`.
-   `logical`: 1 per `true`, 0 per `false`.
-   `datetime`: numero a virgola mobile a precisione doppia contenente un equivalente della data di automazione OLE.
-   `datetimezone`: numero a virgola mobile a precisione doppia che contiene un equivalente della data di automazione OLE della data e dell'ora locale di `value`.
-   `date`: numero a virgola mobile a precisione doppia contenente un equivalente della data di automazione OLE.
-   `time`: espresso in giorni frazionari.
-   `duration`: espresso in giorni interi e frazionari.

Se `value` è di altro tipo, viene restituito un errore.


## Examples

### Example #1
Ottenere il valore `number` di `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Ottenere il valore `number` di `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Ottenere il valore `number` di `"12,3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
