---
title: Time.FromText
---

# Time.FromText


Cria uma Hora a partir dos formatos de Hora locais, universais e personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Cria um valor `time` a partir de uma representação textual, `text`. Poderá ser fornecido um parâmetro `record` opcional, `options`, para especificar propriedades adicionais. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a utilizar. Para obter mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. A omissão deste campo ou o fornecimento de `null` resultará na análise da hora da melhor forma possível.
-   `Culture`: quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"tt"` é `"AM" or "PM"`, enquanto em `"ar-EG"` `"tt"` é `"ص" or "م"`. Quando `Format` é `null`, `Culture` controla o formato predefinido a utilizar. Quando `Culture` é `null` ou é omitido, é utilizado `Culture.Current`.

Para suportar fluxos de trabalho legados, `options` também poderá ser um valor de texto. Tem o mesmo comportamento que `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converter `"10:12:31am"` num valor de Hora.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Converter `"1012"` num valor de hora (Time).
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Converter `"10"` num valor de hora (Time).
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
