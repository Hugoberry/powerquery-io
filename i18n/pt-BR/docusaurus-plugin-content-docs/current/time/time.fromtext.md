---
title: Time.FromText
---

# Time.FromText


Cria uma Hora com Formatos de hora locais, universais e personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Cria um valor `time` a partir de uma representação textual, `text`. Um parâmetro opcional `record`, `options`, pode ser fornecido para especificar propriedades adicionais. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer `null` resultará na análise do tempo usando o melhor esforço possível.
-   `Culture`: Quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"tt"` é `"AM" ou "PM"`, enquanto em `"ar- EG"` `"tt"` é `"ص" ou "م"`. Quando `Format` é `null`, `Culture` controla o formato padrão a ser usado. Quando `Culture` é `null` ou omitido, `Culture.Current` é usado.

Para oferecer suporte a fluxos de trabalho herdados, `options` também pode ser um valor de texto. Isso tem o mesmo comportamento como se `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converta `"10:12:31am"` em um valor Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Converta `"1012"` em um valor Temporal.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Converta `"10"` em um valor Temporal.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
