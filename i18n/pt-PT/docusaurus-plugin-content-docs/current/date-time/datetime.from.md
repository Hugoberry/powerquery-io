---
title: DateTime.From
---

# DateTime.From


Cria um datetime a partir do valor especificado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Devolve um valor `datetime` a partir do `value` especificado. Pode também ser fornecida um `culture` opcional (por exemplo, "en-US"). Se o `value` especificado for `null`, `DateTime.From` devolverá `null`. Se o `value` especificado for `datetime`, será devolvido `value`. É possível converter os seguintes tipos de valor num valor `datetime`:

-   `text`: um valor `datetime` da representação textual. Consulte `DateTime.FromText` para obter detalhes.
-   `date`: um `datetime` com `value` como componente de data e `12:00:00 AM` como componente de hora.
-   `datetimezone`: o equivalente de `datetime` local de `value`.
-   `time`: um `datetime` com o equivalente de data da Data de Automatização OLE `0` como componente de data e `value` como componente de hora.
-   `number`: um equivalente de `datetime` da Data de Automatização OLE expresso por `value`.

Se `value` for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1
Converter `#time(06, 45, 12)` num valor `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Converter `#date(1975, 4, 4)` num valor `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
