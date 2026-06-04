---
title: Time.From
---

# Time.From


Crea una hora a partir del valor donat.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Retorna un valor `time` a partir del valor `value` proporcionat. També es pot proporcionar un valor `culture` (per exemple, "en-US"). Si el valor `value` proporcionat és `null`, `Time.From` retorna `null`. Si el valor `value` proporcionat és `time`, es retorna el valor `value`. Els valors dels tipus següents es poden convertir en un valor `time`:

-   `text`: valor `time` d'una representació textual. Consulteu `Time.FromText` per obtenir-ne informació.
-   `datetime`: component d'hora del valor `value`.
-   `datetimezone`: component d'hora de l'equivalent del datetime local del valor `value`.
-   `number`: valor `time` equivalent al nombre de dies fraccionaris expressat per l'element `value`. Si el valor `value` és negatiu o més gran o més petit que 1, es retorna un error.

Si el valor `value` és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1
Converteix `0.7575` en un valor `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Converteix `#datetime(1899, 12, 30, 06, 45, 12)` en un valor `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
