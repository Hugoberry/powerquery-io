---
title: Number.From
---

# Number.From


Crea un número a partir do valor indicado.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve un valor `number` a partir do `value` indicado. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES"). Se o valor `value` é `null`, `Number.From` devolve `null`. Se o valor `value` é `number`, devólvese `value`. Pódense converter a un valor `number` os valores dos seguintes tipos:

-   `text`: valor `number` a partir da representación textual. Contrólanse os formatos de número comúns ("15", "3.423,10", "5,0E-10"). Consulte `Number.FromText` para obter máis información.
-   `logical`: 1 para `true`, 0 para `false`.
-   `datetime`: número de punto flotante de dobre precisión que contén un equivalente da data de OLE Automation.
-   `datetimezone`: número de punto flotante de dobre precisión que contén un equivalente da data de OLE Automation da data e hora locais de `value`.
-   `date`: número de punto flotante de dobre precisión que contén un equivalente da data de OLE Automation.
-   `time`: expresado en fraccións de días.
-   `duration`: expresado en fraccións de días e días completos.

Se `value` é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1
Obter o valor `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obter o valor `number` de `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obtén o valor de `número` de `"12,3 %"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
