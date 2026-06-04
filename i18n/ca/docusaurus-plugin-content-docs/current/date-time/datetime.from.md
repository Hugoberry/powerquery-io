---
title: DateTime.From
---

# DateTime.From


Crea un valor datetime a partir del valor donat.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Retorna un valor `datetime` a partir del valor `value` proporcionat. També es pot proporcionar un valor `culture` (per exemple, "en-US"). Si el valor `value` proporcionat és `null`, `DateTime.From` retorna `null`. Si el valor `value` proporcionat és `datetime`, es retorna el valor `value`. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor `datetime`:

-   `text`: valor `datetime` a partir d'una representació textual. Consulteu `DateTime.FromText` per obtenir-ne informació.
-   `date`: valor `datetime` amb l'element `value` com a component de data i `12:00:00 AM` com a component d'hora.
-   `datetimezone`: equivalent del valor `datetime` local de l'element `value`.
-   `time`: valor `datetime` amb l'equivalent de la data d'automatització OLE `0` com a component de data i l'element `value` com a component d'hora.
-   `number`: equivalent del valor `datetime` de la data d'automatització OLE expressat per l'element `value`.

Si el valor `value` és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1
Converteix `#time(06, 45, 12)` en un valor `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Converteix `#date(1975, 4, 4)` en un valor `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
