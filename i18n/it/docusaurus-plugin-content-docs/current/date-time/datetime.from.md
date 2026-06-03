---
title: DateTime.From
---

# DateTime.From


Crea un elemento datetime dal valore specificato.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Restituisce un valore `datetime` dall'elemento `value` specificato. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT". Se l'elemento specificato `value` è `null`, `DateTime.From` restituisce `null`. Se l'elemento specificato `value` è `datetime`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore `datetime`:

-   `text`: valore `datetime` dalla rappresentazione testuale. Per informazioni, vedere `DateTime.FromText`.
-   `date`: elemento `datetime` con `value` come componente di data e `12:00:00 AM` come componente di ora.
-   `datetimezone`: elemento `datetime` locale equivalente a `value`.
-   `time`: elemento `datetime` con l'equivalente data della data di automazione OLE di `0` come componente di data e `value` come componente di ora.
-   `numero`: equivalente `datetime` della data di automazione OLE espressa da `value`.

Se `value` è di altro tipo, viene restituito un errore.


## Examples

### Example #1
Converte `#time(06, 45, 12)` in un valore `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Converte `#date(1975, 4, 4)` in un valore `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
