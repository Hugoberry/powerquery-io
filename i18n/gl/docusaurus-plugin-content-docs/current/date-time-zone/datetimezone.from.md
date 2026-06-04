---
title: DateTimeZone.From
---

# DateTimeZone.From


Crea un data, hora e fuso a partir do valor indicado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Cree un `datetimezone` a partir do valor dado.

-   `value`: O valor utilizado para crear un `datetimezone`.
-   `culture`: (Opcional) A cultura a usar ao transformar o valor (por exemplo, "en-US").

Os valores dos seguintes tipos pódense converter nun valor `datetimezone`:

-   `text`: Devolve un valor `datetimezone` da representación textual. Consulte `DateTimeZone.FromText` para máis detalles.
-   `date`: Devolve un `datetimezone` co `value` compoñente de data, `12:00:00 AM` como compoñente horario e o desprazamento correspondente ao fuso horario local.
-   `datetime`: Devolve un `datetimezone` con `value` como DataHora e o desprazamento correspondente ao fuso horario local.
-   `datetimezone`: Devolve `value`.
-   `time`: Devolve un `datetimezone` coa data equivalente á data de automatización OLE de `0` como compoñente de data, `value` como compoñente de hora e o desprazamento correspondente ao fuso horario local. A data de automatización OLE consiste nun número de coma flotante cuxo compoñente integral é o número de días antes ou despois da medianoite do 30 de decembro de 1899 e cuxo compoñente fraccionario representa a hora dese día dividida por 24. Por exemplo, a medianoite do 31 de decembro de 1899 represéntase por 1,0; as 6:00 da mañá do 1 de xaneiro de 1900 represéntanse por 2,25; a medianoite do 29 de decembro de 1899 represéntase por -1,0; e as 6:00 da mañá do 29 de decembro de 1899 represéntanse por -1,25. O valor base é a medianoite do 30 de decembro de 1899. O valor mínimo é a medianoite do 1 de xaneiro de 01:00. O valor máximo é o último momento do 31 de decembro de 9999.
-   `number`: Devolve un `datetimezone` co equivalente de data e hora da Data de automatización OLE expresada por `value` e o desprazamento correspondente ao fuso horario local.
-   `null`: Devolve `null`.

Se `value` é de calquera outro tipo, devólvese un erro.  
  
O valor do desprazamento correspondente ao fuso horario local é diferente ao executar esta función localmente en comparación con executala en liña. Cando se executa localmente, devólvese o fuso horario local. Cando se executa en liña, devólvese o fuso horario UTC (+00:00).


## Examples

### Example #1
Converte a representación textual dunha data, hora e fuso horario nun valor `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Converter a representación textual da data, hora e fuso horario do portugués brasileiro nun valor `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Converte un número que representa o 1 de xaneiro de 2025 ás 12:00 por un valor `datetimezone`. O fuso horario do resultado depende de se o exemplo se executa localmente ou en liña.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
