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

Retorna um valor `time` com base no `value` especificado. Um `culture` opcional também pode ser fornecido (por exemplo, "en-US"). Se o `value` especificado for `null`, `Time.From` retornará `null`. Se o `value` especificado for `time`, `value` será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor `time`:

-   `text`: um valor `time` da representação textual. Confira `Time.FromText` para obter informações detalhadas.
-   `datetime`: o componente de hora do `value`.
-   `datetimezone`: o componente de hora do equivalente de datetime local `value`.
-   `number`: um equivalente de `time` para o número de dias fracionários expressos por `value`. Se `value` for negativo ou superior ou igual a 1, um erro será retornado.

Se `value` for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1
Converta `0.7575` em um valor `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Converta `#datetime(1899, 12, 30, 06, 45, 12)` em um valor `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
