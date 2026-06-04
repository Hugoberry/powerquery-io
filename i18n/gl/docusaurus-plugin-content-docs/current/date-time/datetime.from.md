---
title: DateTime.From
---

# DateTime.From


Crea unha data e hora a partir do valor indicado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Devolve un valor `datetime` a partir do `value` indicado. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES"). Se o valor `value` indicado é `null`, `DateTime.From` devolve `null`. Se o valor `value` é `datetime`, devólvese `value`. Pódense converter a un valor `datetime` os valores dos seguintes tipos:

-   `text`: un valor `datetime` a partir da representación textual. Consulte `DateTime.FromText` para obter máis información.
-   `date`: un valor `datetime` con `value` como o compoñente de data e `12:00:00 AM` como o compoñente de hora.
-   `datetimezone`: o valor `datetime` local equivalente de `value`.
-   `time`: un valor `datetime` coa data equivalente da data de OLE Automation de `0` como o compoñente de data e `value` como o compoñente de hora.
-   `number`: un valor `datetime` equivalente á data de OLE Automation expresado por `value`.

Se `value` é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1
Converter `#time(06, 45, 12)` nun valor `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Converter `#date(1975, 4, 4)` nun valor `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
