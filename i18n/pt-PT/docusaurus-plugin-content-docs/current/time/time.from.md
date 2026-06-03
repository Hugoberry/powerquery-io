---
title: Time.From
---

# Time.From


Cria uma hora a partir do valor especificado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Devolve um valor `time` a partir do `value` especificado. Pode também ser fornecido um `culture` opcional (por exemplo, "en-US"). Se o `value` especificado for `null`, `Time.From` devolve `null`. Se o `value` especificado for `time`, será devolvido `value`. É possível converter os seguintes tipos de valor num valor `time`:

-   `text`: Um valor `time` da representação textual. Consulte `Time.FromText` para obter detalhes.
-   `datetime`: o componente de hora de `value`.
-   `datetimezone`: o componente de hora equivalente à Data/Hora local de `value`.
-   `number`: um valor `time` equivalente ao número de dias inteiros e fracionais expresso por `value`. Se `value` for negativo ou maior ou igual a 1, é devolvido um erro.

Se `value` for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1
Converter `0.7575` num valor `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Converter `#datetime(1899, 12, 30, 06, 45, 12)` num valor `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
