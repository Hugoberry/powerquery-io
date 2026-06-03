---
title: DateTimeZone.From
---

# DateTimeZone.From


Cria um datetimezone a partir do valor especificado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Cria um `datetimezone` a partir do valor dado.

-   `value`: o valor utilizado para criar um `datetimezone`.
-   `culture`: (Opcional) A cultura a utilizar ao transformar o valor (por exemplo, "en-US").

Os valores dos tipos a seguir podem ser convertidos num valor `date`:

-   `text`: Devolve um valor `datetimezone` da representação textual. Consulte `DateTimeZone.FromText` para obter detalhes.
-   `date`: Devolve um `datetimezone` com `value` como componente de data, `12:00:00 AM` como componente de hora e o desvio correspondente ao fuso horário local.
-   `datetime`: Retorna um `datetimezone` com `value` como a data e hora e o desvio correspondente ao fuso horário local.
-   `datetimezone`: Devolve `value`.
-   `time`: Retorna um `datetimezone` com a data equivalente à Data de Automação OLE de `0` como componente de data, `value` como componente de hora e o desvio correspondente ao fuso horário local. A Data de Automatização OLE consiste num número de ponto flutuante cuja componente integral é o número de dias antes ou depois da meia-noite de 30 de dezembro de 1899 e cuja componente fracionária representa a hora desse dia dividida por 24. Por exemplo, a meia-noite de 31 de dezembro de 1899 é representada por 1,0; as 6h da manhã de 1 de janeiro de 1900 são representadas por 2,25; a meia-noite de 29 de dezembro de 1899 é representada por -1,0; e as 6h da manhã de 29 de dezembro de 1899 são representadas por -1,25. O valor base é a meia-noite de 30 de dezembro de 1899. O valor mínimo é a meia-noite de 1 de janeiro de 0100. O valor máximo é o último momento de 31 de dezembro de 9999.
-   `number`: Devolve um `datetimezone` com a data e hora equivalentes à data de automação OLE expressa por `value` e o deslocamento correspondente ao fuso horário local.
-   `null`: devolve `null`.

Se `value` for de qualquer outro tipo, será devolvido um erro.  
  
O valor do desvio correspondente ao fuso horário local é diferente ao executar esta função localmente em vez de a executar online. Quando executada localmente, é devolvido o fuso horário local. Quando executada online, é devolvido o fuso horário UTC (+00:00).


## Examples

### Example #1
Converta a representação textual de um valor de data, hora e fuso horário num valor `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Converta a representação textual da data, hora e fuso horário do português do Brasil num valor `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Converta um número que represente 1 de janeiro de 2025 às 12:00 num valor `datetimezone`. O fuso horário do resultado depende se o exemplo é executado localmente ou online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
