---
title: Time.From
---

# Time.From


Crea unha hora a partir do valor indicado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Devolve un valor `time` a partir do `value` indicado. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES"). Se o valor `value` indicado é `null`, `Time.From` devolve `null`. Se o valor `value` indicado é `time`, devólvese `value`. Pódense converter a un valor `time` os valores dos seguintes tipos:

-   `text`: valor `time` a partir da representación textual. Consulte `Time.FromText` para obter máis información.
-   `datetime`: compoñente de hora de `value`.
-   `datetimezone`: compoñente de hora da data e hora locais equivalente de `value`.
-   `number`: valor `time` equivalente ao número de fraccións de días expresado por `value`. Se `value` é negativo ou maior ou igual que 1, devólvese un erro.

Se `value` é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1
Converter `0.7575` nun valor `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Converter `#datetime(1899, 12, 30, 06, 45, 12)` nun valor `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
