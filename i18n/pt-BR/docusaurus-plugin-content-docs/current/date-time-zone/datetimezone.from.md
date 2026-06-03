---
title: DateTimeZone.From
---

# DateTimeZone.From


Cria um valor datetimezone a partir do valor especificado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Cria um `datetimezone` do valor especificado.

-   `value`: o valor usado para criar um `datetimezone`.
-   `culture`: (opcional) a cultura a ser usada ao transformar o valor (por exemplo, "en-US").

Os valores dos seguintes tipos podem ser convertidos em um valor `datetimezone`:

-   `text`: retorna um valor `datetimezone` da representação textual. Confira `DateTimeZone.FromText` para obter detalhes.
-   `date`: retorna um `datetimezone` com `value` como o componente de data, `12:00:00 AM` como o componente de hora, e o deslocamento correspondente ao fuso horário local.
-   `datetime`: retorna um `datetimezone` com `value` como datetime, e o deslocamento correspondente ao fuso horário local.
-   `datetimezone`: retorna `value`.
-   `time`: retorna um `datetimezone` com a data equivalente à Data de Automação OLE de `0` como o componente de data, `value` como o componente de hora, e o deslocamento correspondente ao fuso horário local. A Data de Automação OLE consiste em um número de ponto flutuante cujo componente integral é o número de dias antes ou depois da meia-noite de 30 de dezembro de 1899 e cujo componente fracionário representa a hora nesse dia dividida por 24. Por exemplo, meia-noite de 31 de dezembro de 1899 é representado por 1,0; 6h, 1º de janeiro de 1900 é representado por 2,25; meia-noite de 29 de dezembro de 1899 é representado por -1,0; e 6h, 29 de dezembro de 1899 é representado por -1,25. O valor base é meia-noite, 30 de dezembro de 1899. O valor mínimo é meia-noite, 1º de janeiro de 0100. O valor máximo é o último momento de 31 de dezembro de 9999.
-   `number`: retorna um `datetimezone` com o equivalente datetime da Data de Automação OLE expressa por `value`, e o deslocamento correspondente ao fuso horário local.
-   `null`: retorna `null`.

Se `value` for de qualquer outro tipo, um erro será retornado.  
  
O valor do deslocamento correspondente ao fuso horário local é diferente ao executar essa função localmente, em vez de executá-la online. Quando executado localmente, o fuso horário local é retornado. Quando executado online, o fuso horário UTC (+00:00) é retornado.


## Examples

### Example #1
Converta a representação textual de uma data, hora e fuso horário em um valor `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Converta a representação textual de data, hora e fuso horário em um valor `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Converta um número que representa 1º de janeiro de 2025 às 12h em um valor `datetimezone`. O fuso horário no resultado depende se o exemplo é executado localmente ou online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
