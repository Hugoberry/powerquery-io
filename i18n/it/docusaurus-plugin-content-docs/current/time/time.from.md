---
title: Time.From
---

# Time.From


Crea un'ora dal valore specificato.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Restituisce un valore `time` dall'elemento `value` specificato. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT". Se l'elemento specificato `value` è `null`, `Time.From` restituisce `null`. Se l'elemento specificato `value` è `time`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore `time`:

-   `text`: valore `time` dalla rappresentazione testuale. Per informazioni, vedere `Time.FromText`.
-   `datetime`: componente ora di `value`.
-   `datetimezone`: componente ora dell'equivalente datetime locale di `value`.
-   `number`: elemento `time` equivalente al numero di giorni frazionari espressi da `value`. Se `value` è negativo o maggiore o uguale a 1, viene restituito un errore.

Se `value` è di altro tipo, viene restituito un errore.


## Examples

### Example #1
Converte `0.7575` in un valore `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Converte `#datetime(1899, 12, 30, 06, 45, 12)` in un valore `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
