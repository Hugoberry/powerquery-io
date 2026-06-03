---
title: DateTime.From
---

# DateTime.From


Cria um valor datetime a partir do valor especificado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Retorna um valor `datetime` do `value` fornecido. Um `culture` opcional também pode ser fornecido (por exemplo, "en-US"). Se o `value` fornecido for `null`, `DateTime.From` retorna `null`. Se o `value` fornecido for `datetime`, `value` será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor `datetime`:

-   `text`: A `datetime` valor da representação textual. Consulte `DateTime.FromText` para obter detalhes.
-   `date`: um `datetime` com `value` como o componente de data e `12:00:00 AM` como o componente de hora.
-   `datetimezone`: o `local datetime` equivalente a `value`.
-   `time`: A `datetime` com o equivalente de data da automação OLE Data de `0` como componente de data e `value` como componente de hora.
-   `number`: um `datetime` equivalente à Data de Automação OLE expressa por `value`.

Se `value` for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1
Converta `#time(06, 45, 12)` em um valor `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Converta `#date(1975, 4, 4)` em um valor `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
